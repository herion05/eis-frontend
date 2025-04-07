import DashboardGrid from "@/app/components/DashboardGrid";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import {
  User,
  CheckCheck,
  BookPlus,
  File,
  Files,
  SquareCheckBig,
  RotateCcw,
  DollarSign,
  Volleyball,
  FileText,
} from "lucide-react";

const dashboardItems = [
  { title: "Profile", icon: User, bgColor: "bg-card-blue", href: "student/profile" },
  {
    title: "Selected",
    subtitle: "Courses",
    icon: CheckCheck,
    bgColor: "bg-card-green",
    href: "student/selected-courses",
  },
  {
    title: "Interim",
    subtitle: "Grades",
    icon: BookPlus,
    bgColor: "bg-card-teal-green",
    href: "student/interim-grades",
  },
  {
    title: "Third Semester",
    subtitle: "Course Selection",
    icon: File,
    bgColor: "bg-card-olive",
    href: "student/third-semester",
  },
  { title: "Attendance", icon: SquareCheckBig, bgColor: "bg-card-teal", href: "student/attendance" },
  { title: "Course", subtitle: "Selection", icon: File, bgColor: "bg-card-avocado", href: "student/course-selection" },
  { title: "Document", subtitle: "Request", icon: Files, bgColor: "bg-card-indigo", href: "student/document-request" },
  {
    title: "Additional",
    subtitle: "Registration",
    icon: Files,
    bgColor: "bg-card-copper",
    href: "student/additional-exams",
  },
  { title: "Resit", subtitle: "Application", icon: RotateCcw, bgColor: "bg-card-red", href: "student/resit-exams" },
  { title: "Finance", icon: DollarSign, bgColor: "bg-card-blue", href: "student/finance" },
  { title: "Clubs", icon: Volleyball, bgColor: "bg-card-violet", href: "student/clubs" },
  { title: "Student", subtitle: "Guide", icon: FileText, bgColor: "bg-card-magenta", href: "student/student-guide" },
];

export default async function StudentDashboardPage() {
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
