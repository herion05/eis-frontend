import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import DashboardCard from "@/app/components/DashboardCard";
import { redirect } from "next/navigation";
import { User, BookOpen, Users, UserCheck, ClipboardCheck, BarChart, Briefcase, FilePlus } from "lucide-react";
import { getUser } from "@/lib/auth";

async function LecturerDashboard() {
  const user = await getUser();
  // if (!user) redirect("/login");

  const dashboardItems = [
    { title: "My Profile", icon: User, bgColor: "bg-card-blue", href: "/profile" },
    { title: "My Courses", subtitle: "List", icon: BookOpen, bgColor: "bg-card-green", href: "/courses" },
    { title: "Student", subtitle: "List", icon: Users, bgColor: "bg-card-blue", href: "/students" },
    { title: "Advisor", icon: UserCheck, bgColor: "bg-card-copper", href: "/advisor" },
    {
      title: "Admission",
      subtitle: "Undergraduate",
      icon: Users,
      bgColor: "bg-card-teal",
      href: "/admission-undergrad",
    },
    { title: "Admission", subtitle: "Graduate", icon: Users, bgColor: "bg-card-teal", href: "/admission-grad" },
    { title: "Survey", subtitle: "My Results", icon: ClipboardCheck, bgColor: "bg-card-teal-green", href: "/survey" },
    { title: "Reports", icon: BarChart, bgColor: "bg-card-avocado", href: "/reports" },
    { title: "Staff", subtitle: "List", icon: Users, bgColor: "bg-card-indigo", href: "/staff" },
    { title: "Job", subtitle: "Follow Up", icon: Briefcase, bgColor: "bg-card-red", href: "/job" },
    {
      title: "Form",
      subtitle: "Staff Application Forms",
      icon: FilePlus,
      bgColor: "bg-card-violet",
      href: "/forms",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="flex max-md:flex-col min-h-screen ">
        <Sidebar />
        <main className="px-5 py-8 sm:px-6 sm:py-10 md:px-8 xl:px-10 xl:py-11 max-w-full min-w-0 grow">
          <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-gray-800 font-semibold mb-6 lg:mb-8">
              Welcome, <span>Name Surname</span>
            </h1>
          </div>
          <div className="container mx-auto grid responsive-dashboard-grid gap-y-6 gap-x-4 lg:gap-x-6 xl:gap-8">
            {dashboardItems.map((item, index) => (
              <DashboardCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                Icon={item.icon}
                bgColor={item.bgColor}
                href={item.href}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LecturerDashboard;
