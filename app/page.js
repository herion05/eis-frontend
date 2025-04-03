import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUser();

  if (!user) redirect("/login");
  if (user.role === "lecturer") redirect("/lecturer-dashboard");
  else if (user.role === "student") redirect("/student-dashboard");

  return null;
}
