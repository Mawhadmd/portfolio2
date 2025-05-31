"use client";

import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

export default function AdminPanel() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "admin_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/blog/admin/login");
  };

  return (
    <div className="min-h-screen bg-Primary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-Text">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-Text bg-Secondary/20 rounded-lg hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300 flex items-center gap-2"
          >
            <FiLogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        <div className="bg-Secondary/5 backdrop-blur-lg rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold text-Text mb-4">
            Welcome to the Admin Panel
          </h2>
          <p className="text-Muted">
            This is your secure admin area. You can manage your content here.
          </p>
          {/* Add your admin panel content here */}
        </div>
      </div>
    </div>
  );
}
