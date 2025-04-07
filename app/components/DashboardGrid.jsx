import DashboardCard from "@/app/components/DashboardCard";

export default function DashboardGrid({ dashboardItems }) {
  return (
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
  );
}
