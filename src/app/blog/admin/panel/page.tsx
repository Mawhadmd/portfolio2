import { Post,  } from "@/models/posts.database";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { headers } from "next/headers";
import AdminPanelButtons from "./AdminPanelButtons";

export default async function AdminPanel() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const data: Post[] = await (
    await fetch(`${protocol}://${host}/api/posts`)
  ).json();

  return (
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-Text">Admin Dashboard</h1>
          <AdminPanelButtons />
        </div>

        <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold text-Text mb-4">
            Welcome to the Admin Panel
          </h2>
          <p className="text-Muted mb-6">
            This is your secure admin area. You can manage your content here.
          </p>

          <div className="space-y-4">
            {data.map((post: Post) => (
              <div
                key={post.id}
                className="bg-Secondary/10 rounded-lg border border-border p-4 hover:border-border/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-Text">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-Muted">
                      <span className="px-2 py-1 bg-Secondary/20 rounded-full">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.status}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <form action={`/blog/${post.slug}`}>
                      <button
                        type="submit"
                        className="p-2 text-Muted hover:text-Text transition-colors"
                        title="View Post"
                      >
                        <FiEye className="h-4 w-4" />
                      </button>
                    </form>
                    <form action={`/blog/admin/post/edit/${post.slug}`}>
                      <button
                        type="submit"
                        className="p-2 text-Muted hover:text-Text transition-colors"
                        title="Edit Post"
                      >
                        <FiEdit2 className="h-4 w-4" />
                      </button>
                    </form>
                    <form action={`/api/posts/${post.id}`} method="DELETE">
                      <button
                        type="submit"
                        className="p-2 text-Muted hover:text-red-500 transition-colors"
                        title="Delete Post"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
