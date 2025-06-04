"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import TiptapImage from "@tiptap/extension-image";
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
import { FiSave, FiX } from "react-icons/fi";
import EditorToolbar from "../../EditorToolbar";
import Youtube from '@tiptap/extension-youtube'

import { Post } from "@/models/posts.database";

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
  const router = useRouter();

  const editor = useEditor({
    extensions: [
      Youtube,
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        codeBlock: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left",
      }),
      TiptapImage.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full",
        },
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-500 hover:text-blue-400 underline",
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
          "prose prose-invert max-w-none focus:outline-none min-h-[500px] prose-headings:text-Text prose-p:text-Text prose-strong:text-Text prose-em:text-Text prose-code:text-Accent prose-pre:bg-Secondary/10 prose-pre:text-Text prose-blockquote:text-Muted prose-ul:text-Text prose-ol:text-Text prose-li:text-Text prose-img:rounded-lg prose-img:max-w-full prose-a:text-Accent hover:prose-a:text-Accent/80",
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();

      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && !thumbnail) {
        setThumbnail(imgMatch[1]);
      }
    },
  });

  useEffect(() => {
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

        if (editor && post.content) {
          editor.commands.setContent(post.content);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params, editor]);

  const handleSave = async () => {
    if (!editor || !title) {
      alert("Title and content required");
      return;
    }

    try {
      const response = await fetch("/api/posts/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: (await params).postslug,
          title,
          content: editor.getHTML(),
          category,
          thumbnail,
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
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
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
            <option className="bg-Secondary text-Text" value="General">General</option>
            <option className="bg-Secondary text-Text" value="Technology">Technology</option>
            <option className="bg-Secondary text-Text" value="Programming">Programming</option>
            <option className="bg-Secondary text-Text" value="Web Development">Web Development</option>
            </select>

          {/* Status Input */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="w-full px-4 py-3 rounded-lg bg-Secondary/10 border border-border text-Text focus:outline-none focus:ring-2 focus:ring-border"
          >
            <option value="draft" className="bg-Secondary text-Text" >Draft</option>
            <option value="published" className="bg-Secondary text-Text" >Published</option>
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
          <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl border text-Text border-border p-6">
            <EditorToolbar editor={editor} />
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}
