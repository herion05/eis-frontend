import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) redirect("/login");
  if (user.role_id === 3) redirect("/lecturer-dashboard");
  else if (user.role_id === 2) redirect("/student-dashboard");

  return null;
}
