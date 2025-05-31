"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLock } from "react-icons/fi";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        document.cookie = `admin_token=${token}; path=/; secure; samesite=strict; max-age=86400`;
        router.push("/blog/admin/panel");
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch (err) {
      console.log(err)
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-Primary">
      <div className="max-w-md w-full space-y-8 p-8 bg-Secondary/5 backdrop-blur-lg rounded-xl border border-border">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-Text">
            Admin Access
          </h2>
          <p className="mt-2 text-center text-sm text-Muted">
            Enter your credentials to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-Muted" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-border bg-Secondary/10 text-Text placeholder-Muted focus:outline-none focus:ring-2 focus:ring-border focus:border-border"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-Text bg-Secondary/20 hover:bg-Secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border transition-all duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
