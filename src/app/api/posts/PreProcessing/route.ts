import { supabase } from "@/lib/supabase";

// This should be an async function, and content should be provided (e.g. from req body or query)
export async function POST(req: Request) { 
  // This endpoint processes HTML content, uploads images to Supabase, and returns the modified content
  // It also generates a thumbnail URL from the first uploaded image and returns it as the thumbnail
  try {
    const { content } = await req.json();
    let modifiedContent = content;
    // Find all <img src="...">
    const imgRegex = /<img[^>]+src=["']([^"'>]+)["'][^>]*>/g;
    let match;
    let firstUploadedUrl: string | undefined;
    const uploadPromises: Promise<void>[] = [];
    const replacements: { original: string; replacement: string }[] = [];
    let uploadError = false;

    while ((match = imgRegex.exec(content))) {
      const imgSrc = match[1];
      if (imgSrc.startsWith("data:")) {
        uploadPromises.push(
          (async () => {
            try {
              const file = await fetch(imgSrc).then((r) => r.blob());
              const fileName = `thumbnails/${Date.now()}-${Math.random()
                .toString(36)
                .slice(2)}.png`;

              const { data, error } = await supabase.storage
                .from("postthumbnails")
                .upload(fileName, file, { upsert: true });

              if (error) throw error;
              if (data) {
                
                const { data: publicUrlData } = supabase.storage
                  .from("postthumbnails")
                  .getPublicUrl(fileName);

                if (publicUrlData?.publicUrl) {
                  if (!firstUploadedUrl)
                    firstUploadedUrl = publicUrlData.publicUrl;
                  replacements.push({
                    original: imgSrc,
                    replacement: publicUrlData.publicUrl,
                  });
                } else {
                  uploadError = true;
                }
              } else {
                uploadError = true;
              }
            } catch (err) {
              uploadError = true;
              console.error("Failed to upload image to Supabase:", err);
            }
          })()
        );
      } else {
        if (!firstUploadedUrl) firstUploadedUrl = imgSrc;
      }
    }

    await Promise.all(uploadPromises);

    // Replace all base64 src with uploaded URLs
    for (const { original, replacement } of replacements) {
      modifiedContent = modifiedContent.replaceAll(original, replacement);
    }

    const newThumbnail = firstUploadedUrl;

    // Only return success if all images uploaded (no uploadError) or there are no images at all
    const hasImages = !!content.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/);
    if (uploadError && hasImages) {
      return new Response(
        JSON.stringify({
          error:
            "One or more images failed to upload. Some images may not display correctly.",
          thumbnail: newThumbnail,
          html: modifiedContent,
        }),
        { status: 207 } // 207 Multi-Status: partial success
      );
    }
    if (!hasImages) {
      return new Response(
        JSON.stringify({ thumbnail: null, html: modifiedContent }),
        { status: 200 }
      );
    }
    if (!newThumbnail) {
      return new Response(
        JSON.stringify({
          error: "No valid images found to generate a thumbnail.",
          thumbnail: null,
          html: modifiedContent,
        }),
        { status: 400 }
      );
    }
    // All images uploaded successfully
    return new Response(
      JSON.stringify({ thumbnail: newThumbnail, html: modifiedContent }),
      { status: 200 }
    );
  } catch (err) {
    console.error("PreProcessing API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
    });
  }
}
