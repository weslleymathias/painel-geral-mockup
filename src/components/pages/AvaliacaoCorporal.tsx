import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ScanEye, Camera, TrendingUp, Users } from 'lucide-react';
import { Progress } from '../ui/progress';

export function AvaliacaoCorporal() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Avaliação Corporal</h2>
        <p className="text-sm text-gray-500 mt-1">
          Análise de condição corporal e composição dos animais
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Avaliações Realizadas</CardTitle>
            <ScanEye className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-teal-600">167/200</div>
            <Progress value={83.5} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Score Médio</CardTitle>
            <Users className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-teal-600">3.2/5</div>
            <p className="text-xs text-gray-500 mt-1">
              Condição ideal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Gordura Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-teal-600">18.5%</div>
            <p className="text-xs text-gray-500 mt-1">
              Dentro do padrão
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Análises Hoje</CardTitle>
            <Camera className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-teal-600">23</div>
            <p className="text-xs text-gray-500 mt-1">
              +5 vs. ontem
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Score Corporal</CardTitle>
            <CardDescription>Classificação de condição corporal (1-5)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { score: 'Score 1 (Muito magro)', quantidade: 8, cor: 'bg-red-500', percentual: 5 },
                { score: 'Score 2 (Magro)', quantidade: 25, cor: 'bg-orange-500', percentual: 15 },
                { score: 'Score 3 (Ideal)', quantidade: 92, cor: 'bg-green-500', percentual: 55 },
                { score: 'Score 4 (Sobrepeso)', quantidade: 35, cor: 'bg-yellow-500', percentual: 21 },
                { score: 'Score 5 (Obeso)', quantidade: 7, cor: 'bg-red-500', percentual: 4 },
              ].map((item) => (
                <div key={item.score} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.score}</span>
                    <span className="text-sm text-gray-900">
                      {item.quantidade} ({item.percentual}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.cor} h-2 rounded-full`}
                      style={{ width: `${item.percentual}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Composição Corporal Média</CardTitle>
            <CardDescription>Percentual médio dos componentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Músculo</span>
                  <span className="text-sm text-gray-900">58.5%</span>
                </div>
                <Progress value={58.5} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Ideal: 55-60%</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Gordura</span>
                  <span className="text-sm text-gray-900">18.5%</span>
                </div>
                <Progress value={18.5} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Ideal: 15-20%</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Ossos</span>
                  <span className="text-sm text-gray-900">15%</span>
                </div>
                <Progress value={15} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Ideal: 14-16%</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Outros</span>
                  <span className="text-sm text-gray-900">8%</span>
                </div>
                <Progress value={8} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Ideal: 7-10%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Avaliações Recentes</CardTitle>
          <CardDescription>Últimas análises realizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: 'A195', score: 3, musculo: 59, gordura: 17, status: 'Ideal' },
              { id: 'A194', score: 4, musculo: 55, gordura: 22, status: 'Sobrepeso' },
              { id: 'A193', score: 3, musculo: 58, gordura: 18, status: 'Ideal' },
              { id: 'A192', score: 2, musculo: 61, gordura: 13, status: 'Magro' },
              { id: 'A191', score: 3, musculo: 57, gordura: 19, status: 'Ideal' },
            ].map((avaliacao) => (
              <div key={avaliacao.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-gray-900">Animal {avaliacao.id}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Score {avaliacao.score} • Músculo: {avaliacao.musculo}% • Gordura: {avaliacao.gordura}%
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    avaliacao.status === 'Ideal'
                      ? 'border-green-500 text-green-600'
                      : avaliacao.status === 'Sobrepeso'
                      ? 'border-yellow-500 text-yellow-600'
                      : 'border-orange-500 text-orange-600'
                  }
                >
                  {avaliacao.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
