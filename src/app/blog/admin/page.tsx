import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = cookies();
  const isAuthenticated =
    (await cookieStore).get("admin_authenticated")?.value === "true";

  if (!isAuthenticated) {
    redirect("/blog/admin/login");
  }

  redirect("/blog/admin/panel");
}
