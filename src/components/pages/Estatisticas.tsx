import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

// Dados mockados para os gráficos
const crescimentoData = [
  { mes: 'Jan', maternidade: 42, pesagem: 165, saude: 178 },
  { mes: 'Fev', maternidade: 45, pesagem: 172, saude: 185 },
  { mes: 'Mar', maternidade: 43, pesagem: 168, saude: 182 },
  { mes: 'Abr', maternidade: 47, pesagem: 175, saude: 190 },
  { mes: 'Mai', maternidade: 45, pesagem: 180, saude: 195 },
  { mes: 'Jun', maternidade: 45, pesagem: 180, saude: 195 },
];

const utilizacaoData = [
  { produto: 'Maternidade', valor: 90 },
  { produto: 'Porcômetro', valor: 92 },
  { produto: 'Pesagem', valor: 90 },
  { produto: 'Saúde', valor: 97.5 },
  { produto: 'AR', valor: 80 },
  { produto: 'Necropsia', valor: 60 },
  { produto: 'Avaliação', valor: 83.5 },
];

const distribuicaoData = [
  { name: 'Maternidade', value: 45, color: '#5DC9E6' },
  { name: 'Porcômetro', value: 230, color: '#002B6B' },
  { name: 'Pesagem', value: 180, color: '#1462C0' },
  { name: 'Saúde Monitorada', value: 195, color: '#336699' },
  { name: 'Realidade Aumentada', value: 12, color: '#B6E7F4' },
  { name: 'Necropsia', value: 3, color: '#5DC9E6' },
  { name: 'Avaliação Corporal', value: 167, color: '#1462C0' },
];

const performanceData = [
  { semana: 'Sem 1', eficiencia: 89, alertas: 12 },
  { semana: 'Sem 2', eficiencia: 91, alertas: 8 },
  { semana: 'Sem 3', eficiencia: 93, alertas: 6 },
  { semana: 'Sem 4', eficiencia: 94.2, alertas: 5 },
];

export function Estatisticas() {
  const [periodo, setPeriodo] = useState('30dias');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Estatísticas e Análises</h2>
          <p className="text-sm text-gray-500 mt-1">
            Visualize o desempenho e métricas de todos os produtos
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <Select value={periodo} onValueChange={setPeriodo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7dias">Últimos 7 dias</SelectItem>
              <SelectItem value="30dias">Últimos 30 dias</SelectItem>
              <SelectItem value="90dias">Últimos 90 dias</SelectItem>
              <SelectItem value="ano">Último ano</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Eficiência Média</CardDescription>
            <CardTitle className="text-[#002B6B]">94.2%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-[#002B6B]">
              <TrendingUp className="h-4 w-4" />
              <span>+2.1% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Taxa de Utilização</CardDescription>
            <CardTitle className="text-[#5DC9E6]">87.3%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-[#5DC9E6]">
              <TrendingUp className="h-4 w-4" />
              <span>+5.2% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Alertas Resolvidos</CardDescription>
            <CardTitle className="text-[#1462C0]">96%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-[#1462C0]">
              <TrendingUp className="h-4 w-4" />
              <span>+3.5% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Tempo Médio Resposta</CardDescription>
            <CardTitle className="text-[#336699]">2.3h</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-[#002B6B]">
              <TrendingDown className="h-4 w-4" />
              <span>-15% vs. período anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos com Tabs */}
      <Tabs defaultValue="crescimento" className="space-y-4">
        <TabsList>
          <TabsTrigger value="crescimento">Crescimento</TabsTrigger>
          <TabsTrigger value="utilizacao">Utilização</TabsTrigger>
          <TabsTrigger value="distribuicao">Distribuição</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Crescimento por Produto */}
        <TabsContent value="crescimento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crescimento por Produto</CardTitle>
              <CardDescription>
                Evolução mensal dos principais produtos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={crescimentoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="maternidade"
                    stackId="1"
                    stroke="#5DC9E6"
                    fill="#5DC9E6"
                    name="Maternidade"
                  />
                  <Area
                    type="monotone"
                    dataKey="pesagem"
                    stackId="1"
                    stroke="#1462C0"
                    fill="#1462C0"
                    name="Pesagem"
                  />
                  <Area
                    type="monotone"
                    dataKey="saude"
                    stackId="1"
                    stroke="#002B6B"
                    fill="#002B6B"
                    name="Saúde Monitorada"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Taxa de Utilização */}
        <TabsContent value="utilizacao" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Taxa de Utilização por Produto</CardTitle>
              <CardDescription>
                Percentual de capacidade utilizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={utilizacaoData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="produto" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="valor" fill="#002B6B" name="Utilização (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Distribuição */}
        <TabsContent value="distribuicao" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Uso</CardTitle>
                <CardDescription>
                  Proporção de animais por produto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={distribuicaoData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {distribuicaoData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detalhamento</CardTitle>
                <CardDescription>
                  Quantidade absoluta por produto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {distribuicaoData.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-gray-900">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${(item.value / 832) * 100}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Performance */}
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Semanal</CardTitle>
              <CardDescription>
                Eficiência e alertas ao longo das semanas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semana" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="eficiencia"
                    stroke="#002B6B"
                    strokeWidth={2}
                    name="Eficiência (%)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="alertas"
                    stroke="#5DC9E6"
                    strokeWidth={2}
                    name="Alertas"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}