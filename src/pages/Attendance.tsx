
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AttendanceTracker } from "@/components/AttendanceTracker";

const Attendance = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-green-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <DashboardHeader />
            <div className="mb-6">
              <SidebarTrigger className="mb-4" />
            </div>
            <AttendanceTracker />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Attendance;
