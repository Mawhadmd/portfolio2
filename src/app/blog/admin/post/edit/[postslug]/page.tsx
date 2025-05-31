"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSave, FiX } from "react-icons/fi";
import EditorToolbar from "../../EditorToolbar";

export default function PostEditor({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [thumbnail, setThumbnail] = useState("");
  const router = useRouter();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[500px]",
      },
    },
  });

  const handleSave = async () => {
    if (!editor || !title) return;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          category,
          thumbnail,
          slug: (await params).slug,
        }),
      });

      if (response.ok) {
        router.push("/blog/admin/panel");
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-Text">Edit Post</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiX className="h-4 w-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text focus:outline-none focus:ring-2 focus:ring-border"
          >
            <option value="General">General</option>
            <option value="Technology">Technology</option>
            <option value="Programming">Programming</option>
            <option value="Web Development">Web Development</option>
          </select>

          {/* Thumbnail Input */}
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Thumbnail URL"
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border"
          />

          {/* Editor */}
          <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl border border-border p-6">
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}
