import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Post } from "@/models/posts.database";

interface PostCardProps {
  post: Post;
  onStatusChange?: (
    postId: string,
    newStatus: "published" | "draft"
  ) => Promise<void>;
}

export default function PostCard({ post, onStatusChange }: PostCardProps) {
  return (
    <div className="bg-Secondary/10 rounded-lg border border-border p-4 hover:border-border/50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-Text">{post.title}</h3>
          <div className="flex items-center gap-2 text-sm text-Muted">
            <span className="px-2 py-1 bg-Secondary/20 rounded-full">
              {post.category}
            </span>
            <span>•</span>
            <select
              value={post.status}
              onChange={(e) =>
                onStatusChange?.(
                  post.id,
                  e.target.value as "published" | "draft"
                )
              }
              className="bg-Secondary/20 rounded px-2 py-1 cursor-pointer"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <span>•</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <form action={`/blog/admin/post/${post.slug}`}>
            <button
              type="submit"
              className="p-2 cursor-pointer text-Muted hover:text-Text transition-colors"
              title="View Post"
            >
              <FiEye className="h-4 w-4" />
            </button>
          </form>
          <form action={`/blog/admin/post/edit/${post.slug}`}>
            <button
              type="submit"
              className="p-2 cursor-pointer text-Muted hover:text-Text transition-colors"
              title="Edit Post"
            >
              <FiEdit2 className="h-4 w-4" />
            </button>
          </form>
          <form action={`/api/posts/${post.id}`} method="DELETE">
            <button
              type="submit"
              className="p-2 cursor-pointer text-Muted hover:text-red-500 transition-colors"
              title="Delete Post"
            >
              <FiTrash2 className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
