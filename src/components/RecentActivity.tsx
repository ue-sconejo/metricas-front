import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, AlertCircle, Trophy, MessageSquare, UserPlus } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "task_completed",
    user: "Ana García",
    action: "completó la tarea",
    target: "Implementar dashboard de métricas",
    time: "hace 5 minutos",
    avatar: "/avatars/ana.jpg",
    icon: CheckCircle,
    iconColor: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    id: 2,
    type: "achievement",
    user: "Carlos López",
    action: "obtuvo el logro",
    target: "Diseñador del Mes",
    time: "hace 15 minutos",
    avatar: "/avatars/carlos.jpg",
    icon: Trophy,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    id: 3,
    type: "comment",
    user: "María Rodríguez",
    action: "comentó en",
    target: "Campaña Q4 2024",
    time: "hace 30 minutos",
    avatar: "/avatars/maria.jpg",
    icon: MessageSquare,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 4,
    type: "overdue",
    user: "David Martín",
    action: "tiene una tarea vencida",
    target: "Reporte de ventas mensual",
    time: "hace 1 hora",
    avatar: "/avatars/david.jpg",
    icon: AlertCircle,
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    id: 5,
    type: "new_member",
    user: "Sistema",
    action: "agregó a",
    target: "Laura Fernández al equipo de Soporte",
    time: "hace 2 horas",
    avatar: "/avatars/system.jpg",
    icon: UserPlus,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    id: 6,
    type: "deadline",
    user: "Roberto Silva",
    action: "estableció fecha límite para",
    target: "Migración a React 18",
    time: "hace 3 horas",
    avatar: "/avatars/roberto.jpg",
    icon: Clock,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const getActivityBadge = (type: string) => {
  switch (type) {
    case "task_completed":
      return { text: "Tarea", color: "bg-green-100 text-green-700 hover:bg-green-100" };
    case "achievement":
      return { text: "Logro", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" };
    case "comment":
      return { text: "Comentario", color: "bg-blue-100 text-blue-700 hover:bg-blue-100" };
    case "overdue":
      return { text: "Vencido", color: "bg-red-100 text-red-700 hover:bg-red-100" };
    case "new_member":
      return { text: "Nuevo", color: "bg-purple-100 text-purple-700 hover:bg-purple-100" };
    case "deadline":
      return { text: "Plazo", color: "bg-orange-100 text-orange-700 hover:bg-orange-100" };
    default:
      return { text: "Actividad", color: "bg-gray-100 text-gray-700 hover:bg-gray-100" };
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
        <CardDescription>
          Últimas acciones y eventos del equipo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            const badge = getActivityBadge(activity.type);
            
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-2 rounded-full ${activity.bgColor}`}>
                  <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={activity.avatar} alt={activity.user} />
                        <AvatarFallback className="text-xs">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{activity.user}</span>
                      <Badge variant="secondary" className={`text-xs ${badge.color}`}>
                        {badge.text}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {activity.action} <span className="text-foreground">{activity.target}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <button className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
            Ver toda la actividad →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}