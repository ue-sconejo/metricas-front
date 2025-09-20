import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { MoreHorizontal, Mail, Phone, MapPin, Star } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const teamMembers = [
  {
    id: 1,
    name: "Ana García",
    role: "Desarrolladora Senior",
    department: "Desarrollo",
    email: "ana.garcia@team.com",
    phone: "+34 123 456 789",
    location: "Madrid, ES",
    performance: 95,
    status: "Activo",
    avatar: "/avatars/ana.jpg",
    rating: 4.9,
    projects: 8,
    tasksCompleted: 124
  },
  {
    id: 2,
    name: "Carlos López",
    role: "Diseñador UX/UI",
    department: "Diseño",
    email: "carlos.lopez@team.com",
    phone: "+34 123 456 790",
    location: "Barcelona, ES",
    performance: 88,
    status: "Activo",
    avatar: "/avatars/carlos.jpg",
    rating: 4.7,
    projects: 6,
    tasksCompleted: 89
  },
  {
    id: 3,
    name: "María Rodríguez",
    role: "Marketing Manager",
    department: "Marketing",
    email: "maria.rodriguez@team.com",
    phone: "+34 123 456 791",
    location: "Valencia, ES",
    performance: 92,
    status: "Activo",
    avatar: "/avatars/maria.jpg",
    rating: 4.8,
    projects: 5,
    tasksCompleted: 67
  },
  {
    id: 4,
    name: "David Martín",
    role: "Vendedor Senior",
    department: "Ventas",
    email: "david.martin@team.com",
    phone: "+34 123 456 792",
    location: "Sevilla, ES",
    performance: 85,
    status: "Vacaciones",
    avatar: "/avatars/david.jpg",
    rating: 4.6,
    projects: 12,
    tasksCompleted: 156
  },
  {
    id: 5,
    name: "Laura Fernández",
    role: "Soporte Técnico",
    department: "Soporte",
    email: "laura.fernandez@team.com",
    phone: "+34 123 456 793",
    location: "Bilbao, ES",
    performance: 91,
    status: "Activo",
    avatar: "/avatars/laura.jpg",
    rating: 4.9,
    projects: 3,
    tasksCompleted: 234
  },
  {
    id: 6,
    name: "Roberto Silva",
    role: "Desarrollador Frontend",
    department: "Desarrollo",
    email: "roberto.silva@team.com",
    phone: "+34 123 456 794",
    location: "Madrid, ES",
    performance: 89,
    status: "Activo",
    avatar: "/avatars/roberto.jpg",
    rating: 4.7,
    projects: 7,
    tasksCompleted: 98
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Activo":
      return "bg-green-100 text-green-700 hover:bg-green-100";
    case "Vacaciones":
      return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
    case "Inactivo":
      return "bg-red-100 text-red-700 hover:bg-red-100";
    default:
      return "bg-gray-100 text-gray-700 hover:bg-gray-100";
  }
};

// const getPerformanceColor = (performance: number) => {
//   if (performance >= 90) return "bg-green-500";
//   if (performance >= 80) return "bg-blue-500";
//   if (performance >= 70) return "bg-yellow-500";
//   return "bg-red-500";
// };

export function TeamMembers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Miembros del Equipo</h2>
          <p className="text-muted-foreground">
            Gestiona y monitorea el rendimiento de tu equipo
          </p>
        </div>
        <Button>Agregar Miembro</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {member.role}
                    </CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                    <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                    <DropdownMenuItem>Asignar tarea</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge 
                  variant="secondary" 
                  className={getStatusColor(member.status)}
                >
                  {member.status}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{member.rating}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Rendimiento</span>
                  <span className="text-sm">{member.performance}%</span>
                </div>
                <Progress 
                  value={member.performance} 
                  className="h-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Proyectos</span>
                  <p>{member.projects}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Tareas</span>
                  <p>{member.tasksCompleted}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>{member.location}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Mensaje
                </Button>
                <Button size="sm" className="flex-1">
                  Ver perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}