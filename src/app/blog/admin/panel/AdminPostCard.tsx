"use client";
import { Post } from "@/models/posts.database";
import React from "react";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

interface AdminPostCardProps {
  post: Post;
}

const AdminPostCard: React.FC<AdminPostCardProps> = ({ post }) => {
  return (
    <div
      key={post.id}
      className="bg-Secondary/10 rounded-lg border border-border p-4 hover:border-border/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-Text">{post.title}</h3>
          <div className="flex items-center gap-2 text-sm text-Muted">
            <span className="px-2 py-1 bg-Secondary/20 rounded-full">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.status}</span>
            <span>•</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={async () => window.open(`/blog/admin/post/${post.slug}`, "_blank")}
            type="submit"
            className="p-2 cursor-pointer text-Muted hover:text-Text transition-colors"
            title="View Post"
          >
            <FiEye className="h-4 w-4" />
          </button>

          <button
            onClick={async () => {
              const response = await fetch(`/api/posts/slug/${post.slug}`, {
                method: "GET",
              });
              if (response.ok) {
                const data = await response.json();
                window.location.href = `/blog/admin/post/${data.slug}/edit`;
              } else {
                console.error("Failed to fetch post");
              }
            }}
            type="submit"
            className="p-2 cursor-pointer text-Muted hover:text-Text transition-colors"
            title="Edit Post"
          >
            <FiEdit2 className="h-4 w-4" />
          </button>

          <button
            onClick={async (e) => {
                if (!confirm("Are you sure you want to delete this post?")) {
                  return;
                }
              e.preventDefault();
              const response = await fetch(`/api/posts/delete/${post.id}`, {
                method: "DELETE",
              });
              if (response.ok) {
                window.location.reload();
              } else {
                console.error("Failed to delete post");
              }
            }}
            type="submit"
            className="p-2 cursor-pointer text-Muted hover:text-red-500 transition-colors"
            title="Delete Post"
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPostCard;
