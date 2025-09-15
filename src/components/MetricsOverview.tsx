import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown, Users, Target, Clock, Award } from "lucide-react";
import { Badge } from "./ui/badge";

const metrics = [
  {
    title: "Productividad Total",
    value: "87%",
    description: "vs mes anterior",
    trend: "up",
    change: "+5.2%",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Miembros Activos",
    value: "24",
    description: "de 28 miembros",
    trend: "up",
    change: "+2",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Metas Completadas",
    value: "18",
    description: "de 25 metas",
    trend: "up",
    change: "+3",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Tiempo Promedio",
    value: "6.2h",
    description: "por proyecto",
    trend: "down",
    change: "-0.8h",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Calificación Promedio",
    value: "4.8",
    description: "sobre 5.0",
    trend: "up",
    change: "+0.2",
    icon: Award,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "up";
        
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">{metric.title}</CardTitle>
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl mb-1">{metric.value}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
                <Badge 
                  variant={isPositive ? "default" : "secondary"}
                  className={`text-xs ${
                    isPositive 
                      ? "bg-green-100 text-green-700 hover:bg-green-100" 
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}