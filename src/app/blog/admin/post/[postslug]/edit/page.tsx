"use client";
// TODO Fix this BS

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FiSave, FiX } from "react-icons/fi";

import { Post } from "@/models/posts.database";
import { SimpleEditor } from "@/components/tiptap/tiptap-templates/simple/simple-editor";

export default function PostEditor({
  params,
}: {
  params: Promise<{ postslug: string }>;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<string | undefined>("General");
  const [thumbnail, setThumbnail] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [loading, setLoading] = useState(true);
  const [content, setcontent] = useState("");
  const router = useRouter();

 
  useEffect(() => {
    //fetches the post data
    const fetchPost = async () => {
      console.log("Fetching post with slug:", (await params).postslug);
      try {
        const response = await fetch(
          `/api/posts/slug/${(await params).postslug}`
        );
        if (!response.ok) throw new Error("Failed to fetch post");
        const post: Post = await response.json();
        console.log("Fetched post:", post);
        setTitle(post.title);
        setCategory(post.category);
        setThumbnail(post.thumbnail ?? "");
        setStatus(post.status as "draft" | "published");

        // Set editor content after a short delay to ensure editor is ready

        if (post.content) {
          setcontent(post.content);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params]);

  const handleSave = async () => {
    //saves the posts edits
    if (!content || !title) {
      alert("Title and content required");
      return;
    }

    // Find first image src in content
    const newThumbnailfetch = await fetch("/api/posts/PreProcessing", { //This will take the content and process (upload images, replace URLS, and return the link for the thumbnail)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const data = await newThumbnailfetch.json();
    // Use the response status from the fetch, not from the data object
    if (!newThumbnailfetch.ok) {
      alert("Error processing content: " + (data.error || "Unknown error"));
      return;
    }
    // Use the processed thumbnail and html
    const processedThumbnail = data.thumbnail;
    const processedHtml = data.html;

    try {
      const response = await fetch("/api/posts/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: (await params).postslug,
          title,
          content: processedHtml,
          category,
          thumbnail: processedThumbnail,
          status,
        }),
      });

      if (response.ok) {
        router.push("/blog/admin/panel");
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-Primary p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-Text">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-Primary p-8 ">
      <div className="max-w-4xl mx-auto ">
        <div className="flex justify-between items-center mb-8 ">
          <h1 className="text-3xl font-bold text-Text">Edit Post</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/50 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiX className="h-4 w-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className=" cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/50 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiSave className="h-4 w-4" />
              Save
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
          />

          {/* Category Input */}
          <select
            value={category as string}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text focus:outline-none focus:ring-2 focus:ring-border "
          >
            <option className="bg-Secondary text-Text" value="General">
              General
            </option>
            <option className="bg-Secondary text-Text" value="Technology">
              Technology
            </option>
            <option className="bg-Secondary text-Text" value="Programming">
              Programming
            </option>
            <option className="bg-Secondary text-Text" value="Web Development">
              Web Development
            </option>
          </select>

          {/* Status Input */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text focus:outline-none focus:ring-2 focus:ring-border"
          >
            <option value="draft" className="bg-Secondary text-Text">
              Draft
            </option>
            <option value="published" className="bg-Secondary text-Text">
              Published
            </option>
          </select>

          {/* Thumbnail Input */}
          <div className="space-y-2">
            <label className="text-sm text-Muted">Thumbnail URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="Will be automatically set from first image in post"
                className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
              />
              {thumbnail && (
                <button
                  onClick={() => setThumbnail("")}
                  className="px-3 py-2 text-Muted hover:text-Text transition-colors"
                  title="Clear thumbnail"
                >
                  <FiX className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Editor */}
          <div className=" bg-Secondary/5 rounded-xl border text-Text border-border/50  ">
            {<SimpleEditor content={content} setcontent={setcontent} />}
          </div>
        </div>
      </div>
    </div>
  );
}
