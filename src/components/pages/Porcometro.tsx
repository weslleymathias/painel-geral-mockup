import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Ruler, TrendingUp, BarChart3, Activity } from 'lucide-react';
import { Progress } from '../ui/progress';

export function Porcometro() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Porcômetro</h2>
        <p className="text-sm text-gray-500 mt-1">
          Medição precisa e análise dimensional dos animais
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card style={{ borderTop: '4px solid #99DDE1' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Animais Medidos</CardTitle>
            <Ruler className="h-4 w-4" style={{ color: '#99DDE1' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#428B94' }}>230/250</div>
            <Progress value={92} className="mt-2" style={{ backgroundColor: '#D0F0F8' }} />
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #99DDE1' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Comprimento Médio</CardTitle>
            <BarChart3 className="h-4 w-4" style={{ color: '#99DDE1' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#428B94' }}>142 cm</div>
            <p className="text-xs text-gray-500 mt-1">
              Dentro do padrão
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #99DDE1' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Altura Média</CardTitle>
            <Activity className="h-4 w-4" style={{ color: '#99DDE1' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#428B94' }}>68 cm</div>
            <p className="text-xs text-gray-500 mt-1">
              +2 cm vs. lote anterior
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #99DDE1' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Crescimento Semanal</CardTitle>
            <TrendingUp className="h-4 w-4" style={{ color: '#99DDE1' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#428B94' }}>+3.2%</div>
            <p className="text-xs text-gray-500 mt-1">
              Acima da média
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Últimas Medições</CardTitle>
            <CardDescription>Registros mais recentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'A230', comp: 145, alt: 70, peso: 98, status: 'Ótimo' },
                { id: 'A229', comp: 140, alt: 67, peso: 95, status: 'Bom' },
                { id: 'A228', comp: 138, alt: 66, peso: 92, status: 'Bom' },
                { id: 'A227', comp: 142, alt: 68, peso: 96, status: 'Ótimo' },
              ].map((animal) => (
                <div key={animal.id} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#D0F0F8' }}>
                  <div>
                    <p className="text-gray-900">Animal {animal.id}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {animal.comp}cm × {animal.alt}cm • {animal.peso}kg
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    style={
                      animal.status === 'Ótimo'
                        ? { borderColor: '#59AC83', color: '#006633' }
                        : { borderColor: '#428B94', color: '#143139' }
                    }
                  >
                    {animal.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição Dimensional</CardTitle>
            <CardDescription>Categorias por tamanho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { categoria: 'Grande', quantidade: 78, cor: '#59AC83', percentual: 34 },
                { categoria: 'Médio', quantidade: 112, cor: '#428B94', percentual: 49 },
                { categoria: 'Pequeno', quantidade: 40, cor: '#Ff8359', percentual: 17 },
              ].map((cat) => (
                <div key={cat.categoria} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{cat.categoria}</span>
                    <span className="text-sm text-gray-900">{cat.quantidade} ({cat.percentual}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full" style={{ width: `${cat.percentual}%`, backgroundColor: cat.cor }} />
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