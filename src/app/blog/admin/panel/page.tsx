import { Post } from "@/models/posts.database";

import AdminPanelButtons from "./AdminPanelButtons";
import AdminPostCard from "./AdminPostCard";
import { getPosts } from "@/lib/posts";

// Auth-gated dashboard backed by live Supabase data — never prerender it.
export const dynamic = "force-dynamic";

export default async function AdminPanel() {
  const data: Post[] = await getPosts("all");

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

            <div className="space-y-2"> 
              {data.map((post: Post) => (
              <AdminPostCard 
                key={post.id}
                post={post}
              />
            ))}
            </div>
            
          </div>
        </div>
      </div>
  
  );
}
