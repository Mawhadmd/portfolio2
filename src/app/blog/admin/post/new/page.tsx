"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSave, FiX } from "react-icons/fi";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleCreate = async () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content: "",
          category: "General",
          status: "draft",
          slug,
        }),
      });

      if (response.ok) {
        router.push(`/blog/admin/post/${slug}/edit`);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-Text">New Post</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiX className="h-4 w-4" />
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiSave className="h-4 w-4" />
              Create Post
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
          />
        </div>
      </div>
    </div>
  );
}
