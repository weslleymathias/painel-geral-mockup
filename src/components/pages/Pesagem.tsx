import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Scale, TrendingUp, Target, Calendar } from 'lucide-react';
import { Progress } from '../ui/progress';

export function Pesagem() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Pesagem</h2>
        <p className="text-sm text-gray-500 mt-1">
          Controle de peso e desenvolvimento dos animais
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Animais Pesados</CardTitle>
            <Scale className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-purple-600">180/200</div>
            <Progress value={90} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Peso Médio</CardTitle>
            <Target className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-purple-600">95.4 kg</div>
            <p className="text-xs text-gray-500 mt-1">
              Meta: 100 kg
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Ganho Diário</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-purple-600">0.87 kg</div>
            <p className="text-xs text-gray-500 mt-1">
              Acima da média
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Próxima Pesagem</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-purple-600">Em 3 dias</div>
            <p className="text-xs text-gray-500 mt-1">
              15 de Novembro
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Peso</CardTitle>
            <CardDescription>Últimas pesagens registradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { data: '12/Nov', peso: 95.4, ganho: 2.8, status: 'Excelente' },
                { data: '08/Nov', peso: 92.6, ganho: 2.5, status: 'Bom' },
                { data: '04/Nov', peso: 90.1, ganho: 2.3, status: 'Bom' },
                { data: '01/Nov', peso: 87.8, ganho: 2.6, status: 'Excelente' },
              ].map((registro) => (
                <div key={registro.data} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-gray-900">{registro.data}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Ganho: +{registro.ganho}kg em 4 dias
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-purple-600">{registro.peso} kg</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        registro.status === 'Excelente'
                          ? 'border-green-500 text-green-600'
                          : 'border-blue-500 text-blue-600'
                      }
                    >
                      {registro.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Faixa de Peso</CardTitle>
            <CardDescription>Categorização atual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { faixa: 'Acima de 100kg', quantidade: 42, cor: 'bg-green-500', percentual: 23 },
                { faixa: '90-100kg', quantidade: 98, cor: 'bg-blue-500', percentual: 54 },
                { faixa: '80-90kg', quantidade: 35, cor: 'bg-yellow-500', percentual: 20 },
                { faixa: 'Abaixo de 80kg', quantidade: 5, cor: 'bg-orange-500', percentual: 3 },
              ].map((faixa) => (
                <div key={faixa.faixa} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{faixa.faixa}</span>
                    <span className="text-sm text-gray-900">{faixa.quantidade} ({faixa.percentual}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${faixa.cor} h-2 rounded-full`} style={{ width: `${faixa.percentual}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
