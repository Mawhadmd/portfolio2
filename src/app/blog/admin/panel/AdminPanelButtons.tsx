"use client";

import { FiLogOut, FiPlus} from "react-icons/fi";
import { useRouter } from "next/navigation";


export default function AdminPanelButtons() {
  const router = useRouter();


  const handleLogout = async () => {
    const response = await fetch("/api/admin/logout", { method: "POST" });
    if(response.ok)
    router.push("/blog/admin/login");
  };


  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/blog/admin/post/new")}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 border-border border focus:ring-border transition-all duration-300 flex items-center gap-2"
        >
          <FiPlus className="h-4 w-4" />
          New Post
        </button>
        <button
          onClick={handleLogout}
          className="cursor-pointer px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 border-border border  focus:ring-border transition-all duration-300 flex items-center gap-2"
        >
          <FiLogOut className="h-4 w-4" />
          Logout
        </button>
      </div>

  
    </>
  );
}
