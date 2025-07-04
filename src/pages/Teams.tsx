
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { TeamsOverview } from "@/components/TeamsOverview";
import { PlayerPayments } from "@/components/PlayerPayments";
import { PlayerMedicalRecords } from "@/components/PlayerMedicalRecords";
import { TrainingManagement } from "@/components/TrainingManagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Teams = () => {
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
            
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Teams</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <TeamsOverview />
              </TabsContent>
              
              <TabsContent value="payments">
                <PlayerPayments />
              </TabsContent>
              
              <TabsContent value="medical">
                <PlayerMedicalRecords />
              </TabsContent>
              
              <TabsContent value="training">
                <TrainingManagement />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Teams;
