import { BarChart3, Users, FileText, Settings, Home, Target, Trophy, Activity } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: "overview", name: "Resumen", icon: Home },
  { id: "team", name: "Equipo", icon: Users },
  { id: "analytics", name: "Análisis", icon: BarChart3 },
  { id: "reports", name: "Reportes", icon: FileText },
];

// const quickActions = [
//   { name: "Metas del Mes", icon: Target, count: "5" },
//   { name: "Reconocimientos", icon: Trophy, count: "12" },
//   { name: "Actividades", icon: Activity, count: "28" },
// ];

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            Navegación
          </h3>
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  activeTab === item.id && "bg-blue-50 text-blue-600"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.name}
              </Button>
            );
          })}
        </div>

        {/* <div className="border-t pt-6">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            Acciones Rápidas
          </h3>
          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.name}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center">
                    <Icon className="mr-3 h-4 w-4 text-gray-400" />
                    <span className="text-sm">{action.name}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {action.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="border-t pt-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h4 className="text-sm mb-2">Rendimiento del Equipo</h4>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Este mes</span>
              <span className="text-green-600">+12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}