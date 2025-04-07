import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

export default function LecturerLayout({ children }) {
  return (
    <>
      <Header type="lecturer" />
      <div className="flex md:items-start max-md:flex-col">
        <Sidebar type="lecturer" />
        <main className="px-5 pt-8 pb-24 sm:px-6 sm:pt-10 sm:pb-28 md:px-8 xl:px-10 xl:pt-11 xl:pb-30 max-w-full min-w-0 grow">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
