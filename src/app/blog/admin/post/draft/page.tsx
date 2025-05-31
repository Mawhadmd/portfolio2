"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextColor from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, all } from "lowlight";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FiSave, FiX, FiImage } from "react-icons/fi";
import EditorToolbar from "../EditorToolbar";

export default function DraftEditor() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [thumbnail, setThumbnail] = useState("");
  const router = useRouter();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        codeBlock: false, // Disable default code block to use lowlight
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full",
        },
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-Accent hover:text-Accent/80 underline",
        },
      }),
      Underline,
      TextColor.configure({
        types: ["textStyle"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      CodeBlockLowlight.configure({
        lowlight: createLowlight(all),
        HTMLAttributes: {
          class: "rounded-lg bg-Secondary/10 p-4 font-mono text-sm",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[500px] prose-headings:text-Text prose-p:text-Text prose-strong:text-Text prose-em:text-Text prose-code:text-Accent prose-pre:bg-Secondary/10 prose-pre:text-Text prose-blockquote:text-Muted prose-ul:text-Text prose-ol:text-Text prose-li:text-Text prose-img:rounded-lg prose-img:max-w-full",
      },
    },
    onUpdate: ({ editor }) => {
      // Extract first image from content
      const content = editor.getHTML();
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && !thumbnail) {
        setThumbnail(imgMatch[1]);
      }
    },
  });

  const handleSave = async () => {
    if (!editor || !title) 
        {alert('Title and content required')
        return;}

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
          status: "draft",
        }),
      });

      if (response.ok) {
        router.push("/blog/admin/panel");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
    }
  };

  return (
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-Text">New Draft</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiX className="h-4 w-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
            >
              <FiSave className="h-4 w-4" />
              Save Draft
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
            {thumbnail && (
              <div className="mt-2">
                <img
                  src={thumbnail}
                  alt="Thumbnail preview"
                  className="h-20 w-20 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Editor */}
          <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl border text-Text border-border p-6">
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}
