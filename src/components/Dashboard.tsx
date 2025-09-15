import { useState } from 'react';
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { MetricsOverview } from "./MetricsOverview";
import { PerformanceCharts } from "./PerformanceCharts";
import { TeamMembers } from "./TeamMembers";
import { RecentActivity } from "./RecentActivity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent } from "./ui/tabs";

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader onLogout={onLogout} />
      
      <div className="flex">
        <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="mb-2">Panel de Control</h1>
              <p className="text-muted-foreground">
                Monitorea el rendimiento y progreso de tu equipo
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="overview" className="space-y-6">
                <MetricsOverview />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <PerformanceCharts />
                  <RecentActivity />
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="space-y-6">
                <TeamMembers />
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Análisis Avanzado</CardTitle>
                    <CardDescription>
                      Métricas detalladas y tendencias de rendimiento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PerformanceCharts />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reportes</CardTitle>
                    <CardDescription>
                      Genera y exporta reportes de rendimiento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground py-8">
                      Funcionalidad de reportes en desarrollo
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}