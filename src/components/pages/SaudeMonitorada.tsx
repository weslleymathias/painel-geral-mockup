import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { HeartPulse, Thermometer, Activity, AlertCircle } from 'lucide-react';
import { Progress } from '../ui/progress';

export function SaudeMonitorada() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Saúde Monitorada</h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitoramento contínuo de saúde e bem-estar animal
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Animais Monitorados</CardTitle>
            <HeartPulse className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-red-600">195/200</div>
            <Progress value={97.5} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Status Saudável</CardTitle>
            <Activity className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-red-600">188</div>
            <p className="text-xs text-gray-500 mt-1">
              96.4% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Em Observação</CardTitle>
            <Thermometer className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-orange-600">5</div>
            <p className="text-xs text-gray-500 mt-1">
              Monitoramento intensivo
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Alertas Ativos</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-red-600">2</div>
            <p className="text-xs text-gray-500 mt-1">
              Ação imediata necessária
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alertas Recentes</CardTitle>
            <CardDescription>Situações que requerem atenção</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'A145', tipo: 'Temperatura elevada', valor: '39.8°C', prioridade: 'Alta' },
                { id: 'A132', tipo: 'Frequência cardíaca', valor: '125 bpm', prioridade: 'Média' },
                { id: 'A089', tipo: 'Inatividade prolongada', valor: '6 horas', prioridade: 'Baixa' },
                { id: 'A067', tipo: 'Consumo de água reduzido', valor: '-40%', prioridade: 'Média' },
              ].map((alerta) => (
                <div key={alerta.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">Animal {alerta.id}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {alerta.tipo}: {alerta.valor}
                    </p>
                  </div>
                  <Badge
                    variant={alerta.prioridade === 'Alta' ? 'destructive' : 'outline'}
                    className={
                      alerta.prioridade === 'Média'
                        ? 'border-orange-500 text-orange-600'
                        : alerta.prioridade === 'Baixa'
                        ? 'border-blue-500 text-blue-600'
                        : ''
                    }
                  >
                    {alerta.prioridade}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Indicadores de Saúde</CardTitle>
            <CardDescription>Métricas médias do rebanho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Temperatura Média</span>
                  <span className="text-sm text-gray-900">38.5°C</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Dentro do padrão (38-39°C)</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Frequência Cardíaca</span>
                  <span className="text-sm text-gray-900">95 bpm</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Normal (80-110 bpm)</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Nível de Atividade</span>
                  <span className="text-sm text-gray-900">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Atividade normal</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Consumo de Ração</span>
                  <span className="text-sm text-gray-900">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Ótimo consumo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
