
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PlayerDetails } from "@/components/PlayerDetails";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PlayerDetail = () => {
  const { playerId } = useParams();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-green-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <DashboardHeader />
            <div className="mb-6">
              <SidebarTrigger className="mb-4" />
              <Link to="/teams">
                <Button variant="outline" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Teams
                </Button>
              </Link>
            </div>
            <PlayerDetails playerId={playerId} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default PlayerDetail;
