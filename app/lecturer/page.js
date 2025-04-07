import DashboardGrid from "@/app/components/DashboardGrid";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { User, BookOpen, Users, UserCheck, ClipboardCheck, BarChart, Briefcase, FilePlus } from "lucide-react";

const dashboardItems = [
  { title: "My Profile", icon: User, bgColor: "bg-card-blue", href: "lecturer/profile" },
  { title: "My Courses", subtitle: "List", icon: BookOpen, bgColor: "bg-card-green", href: "lecturer/courses" },
  { title: "Student", subtitle: "List", icon: Users, bgColor: "bg-card-blue", href: "lecturer/students" },
  { title: "Advisor", icon: UserCheck, bgColor: "bg-card-copper", href: "lecturer/advisor" },
  {
    title: "Admission",
    subtitle: "Undergraduate",
    icon: Users,
    bgColor: "bg-card-teal",
    href: "lecturer/admission-undergrad",
  },
  { title: "Admission", subtitle: "Graduate", icon: Users, bgColor: "bg-card-teal", href: "lecturer/admission-grad" },
  {
    title: "Survey",
    subtitle: "My Results",
    icon: ClipboardCheck,
    bgColor: "bg-card-teal-green",
    href: "lecturer/survey",
  },
  { title: "Reports", icon: BarChart, bgColor: "bg-card-avocado", href: "lecturer/reports" },
  { title: "Staff", subtitle: "List", icon: Users, bgColor: "bg-card-indigo", href: "lecturer/staff" },
  { title: "Job", subtitle: "Follow Up", icon: Briefcase, bgColor: "bg-card-red", href: "/lecturer/job" },
  {
    title: "Form",
    subtitle: "Staff Application Forms",
    icon: FilePlus,
    bgColor: "bg-card-violet",
    href: "lecturer/forms",
  },
];

export default async function LecturerDashboardPage() {
  const user = await getUser();
  // if (!user) redirect("/login");

  return (
    <>
      <section>
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-gray-800 font-semibold mb-6 lg:mb-8">
            Welcome, <span>Name Surname</span>
          </h1>
        </div>
      </section>
      <section>
        <DashboardGrid dashboardItems={dashboardItems} />
      </section>
    </>
  );
}
