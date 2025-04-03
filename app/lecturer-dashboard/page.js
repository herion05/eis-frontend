import React from "react";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import DashboardCard from "@/app/components/DashboardCard";
import { redirect } from "next/navigation";

import { User, BookOpen, Users, UserCheck, ClipboardCheck, BarChart, Briefcase, FilePlus } from "lucide-react";
import { getUser } from "@/lib/auth";

async function LecturerDashboard() {
  const user = await getUser();
  if (!user) redirect("/login");

  const dashboardItems = [
    { title: "My Profile", icon: User, bgColor: "bg-blue-400", href: "/profile" },
    { title: "My Courses", icon: BookOpen, bgColor: "bg-green-600", href: "/courses" },
    { title: "Student List", icon: Users, bgColor: "bg-blue-400", href: "/students" },
    { title: "Advisor", icon: UserCheck, bgColor: "bg-yellow-600", href: "/advisor" },
    { title: "Admission Undergraduate", icon: Users, bgColor: "bg-teal-500", href: "/admission-undergrad" },
    { title: "Admission Graduate", icon: Users, bgColor: "bg-teal-500", href: "/admission-grad" },
    { title: "Survey Results", icon: ClipboardCheck, bgColor: "bg-green-600", href: "/survey" },
    { title: "Reports", icon: BarChart, bgColor: "bg-green-600", href: "/reports" },
    { title: "Staff List", icon: Users, bgColor: "bg-purple-500", href: "/staff" },
    { title: "Job Follow Up", icon: Briefcase, bgColor: "bg-red-500", href: "/job" },
    { title: "Staff Application Forms", icon: FilePlus, bgColor: "bg-purple-500", href: "/forms" },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="p-6">
          <h1 className="text-4xl text-gray-900 font-light mb-6">
            Welcome, <span className="text-gray-900">Name LastName</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dashboardItems.map((item, idx) => (
              <DashboardCard key={idx} title={item.title} Icon={item.icon} bgColor={item.bgColor} href={item.href} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LecturerDashboard;
