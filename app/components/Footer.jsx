import BackToTopBtn from "./BackToTopBtn";

export default function Footer() {
  return (
    <footer className="min-h-12 py-2 mt-2 flex items-center bg-epoka-blue-50">
      <div className="px-4 lg:px-6 xl:px-8 flex justify-between items-center w-full">
        <p className="text-xs lg:text-sm xl:text-[15px] leading-tight lg:leading-tight text-gray-600">
          2014 - {new Date().getFullYear()} &#169; Epoka University
        </p>
        <BackToTopBtn />
      </div>
    </footer>
  );
}
