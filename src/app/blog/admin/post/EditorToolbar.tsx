"use client";

import { Editor } from "@tiptap/react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiType,
  FiList,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiAlignJustify,
  FiLink,
  FiImage,
  FiCheckSquare,
  FiCode,
  FiMinus,
  FiMessageSquare,
  FiChevronDown,
  FiYoutube,
} from "react-icons/fi";
import { useState } from "react";

interface EditorToolbarProps {
  editor: Editor | null;
}

export default function EditorToolbar({ editor }: EditorToolbarProps) {
  const [showHeadings, setShowHeadings] = useState(false);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="sticky top-2 z-50 bg-Primary flex flex-wrap gap-2 mb-4 p-2 rounded-lg border border-border">
      {/* Text Style */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("bold") ? "bg-Secondary/20 text-Accent" : "text-Text"
        }`}
        title="Bold"
      >
        <FiBold className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("italic")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Italic"
      >
        <FiItalic className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("underline")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Underline"
      >
        <FiUnderline className="h-4 w-4" />
      </button>

      {/* Headings Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowHeadings(!showHeadings)}
          className={`p-2 rounded hover:bg-Secondary/20 transition-colors flex items-center gap-1 ${
            editor.isActive("heading")
              ? "bg-Secondary/20 text-Accent"
              : "text-Text"
          }`}
          title="Headings"
        >
          <FiType className="h-4 w-4" />
          <FiChevronDown className="h-3 w-3" />
        </button>
        {showHeadings && (
          <div className="z-50 bg-Secondary absolute top-[130%] left-0 mt-1  border border-border rounded-lg shadow-lg ">
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 1
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 2
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 3
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 4
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 5 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 5
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 6 }).run();
                setShowHeadings(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-Text hover:bg-Secondary/20"
            >
              Heading 6
            </button>
          </div>
        )}
      </div>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("bulletList")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Bullet List"
      >
        <FiList className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("orderedList")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Ordered List"
      >
        <FiList className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("taskList")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Task List"
      >
        <FiCheckSquare className="h-4 w-4" />
      </button>

      {/* Alignment */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive({ textAlign: "left" })
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Align Left"
      >
        <FiAlignLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive({ textAlign: "center" })
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Align Center"
      >
        <FiAlignCenter className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive({ textAlign: "right" })
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Align Right"
      >
        <FiAlignRight className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive({ textAlign: "justify" })
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Justify"
      >
        <FiAlignJustify className="h-4 w-4" />
      </button>

      {/* Other Features */}
      <button
        onClick={addLink}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("link") ? "bg-Secondary/20 text-Accent" : "text-Text"
        }`}
        title="Add Link"
      >
        <FiLink className="h-4 w-4" />
      </button>
      <button
        onClick={addImage}
        className="p-2 rounded hover:bg-Secondary/20 transition-colors text-Text"
        title="Add Image"
      >
        <FiImage className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("codeBlock")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Code Block"
      >
        <FiCode className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-Secondary/20 transition-colors ${
          editor.isActive("blockquote")
            ? "bg-Secondary/20 text-Accent"
            : "text-Text"
        }`}
        title="Blockquote"
      >
        <FiMessageSquare className="h-4 w-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-2 rounded hover:bg-Secondary/20 transition-colors text-Text"
        title="Horizontal Rule"
      >
        <FiMinus className="h-4 w-4" />
      </button>
      <button
        onClick={() => {
          const url = window.prompt("Enter YouTube URL:");
          if (url) {
            editor?.commands.setYoutubeVideo({
              src: url,
              width: 640,
              height: 480,
            });
          }
        }}
        className="p-2 text-Muted hover:text-Text transition-colors"
        title="Insert YouTube video"
      >
        <FiYoutube className="w-4 h-4" />
      </button>
    </div>
  );
}
