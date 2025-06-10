// app/sitemap.xml/route.ts
import { supabase } from "@/lib/supabase";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET() {
  const slugs = (
    await supabase.from("posts").select("slug").eq("status", 'published')
  );
  console.log(slugs)
  if (!slugs.data) {
    return new Response(
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>',
      {
        headers: {
          "Content-Type": "application/xml",
        },
        status: 404,
      }
    );
  }
  const links = slugs.data!.map((slug) => ({
    url: `/blog/${slug.slug}`,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const stream = new SitemapStream({
    hostname: "https://moawadportfolio.netlify.app",
  });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
