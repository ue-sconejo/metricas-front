import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const performanceData = [
  { month: 'Ene', productividad: 78, metas: 12, satisfaccion: 4.2 },
  { month: 'Feb', productividad: 82, metas: 15, satisfaccion: 4.4 },
  { month: 'Mar', productividad: 85, metas: 18, satisfaccion: 4.6 },
  { month: 'Abr', productividad: 88, metas: 20, satisfaccion: 4.7 },
  { month: 'May', productividad: 91, metas: 22, satisfaccion: 4.8 },
  { month: 'Jun', productividad: 87, metas: 18, satisfaccion: 4.8 },
];

const teamData = [
  { departamento: 'Desarrollo', rendimiento: 92, miembros: 8 },
  { departamento: 'Diseño', rendimiento: 88, miembros: 5 },
  { departamento: 'Marketing', rendimiento: 85, miembros: 6 },
  { departamento: 'Ventas', rendimiento: 90, miembros: 7 },
  { departamento: 'Soporte', rendimiento: 89, miembros: 4 },
];

export function PerformanceCharts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tendencia de Productividad</CardTitle>
          <CardDescription>
            Evolución mensual del rendimiento del equipo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => {
                    const labels = {
                      productividad: 'Productividad (%)',
                      metas: 'Metas Completadas',
                      satisfaccion: 'Satisfacción'
                    };
                    return [value, labels[name as keyof typeof labels]];
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="productividad" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="metas" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rendimiento por Departamento</CardTitle>
          <CardDescription>
            Comparación del desempeño entre departamentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teamData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="departamento" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => {
                    const labels = {
                      rendimiento: 'Rendimiento (%)',
                      miembros: 'Miembros del equipo'
                    };
                    return [value, labels[name as keyof typeof labels]];
                  }}
                />
                <Bar 
                  dataKey="rendimiento" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}