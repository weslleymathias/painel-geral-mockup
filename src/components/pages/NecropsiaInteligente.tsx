import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Microscope, FileText, AlertTriangle, TrendingDown } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export function NecropsiaInteligente() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Necropsia Inteligente</h2>
        <p className="text-sm text-gray-500 mt-1">
          Análise post-mortem automatizada e diagnóstico assistido por IA
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Análises Realizadas</CardTitle>
            <Microscope className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-orange-600">3</div>
            <p className="text-xs text-gray-500 mt-1">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Taxa de Mortalidade</CardTitle>
            <TrendingDown className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-green-600">0.24%</div>
            <p className="text-xs text-gray-500 mt-1">
              -0.08% vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Diagnósticos IA</CardTitle>
            <FileText className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-orange-600">3/3</div>
            <p className="text-xs text-gray-500 mt-1">
              100% processados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Alertas Preventivos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-orange-600">2</div>
            <p className="text-xs text-gray-500 mt-1">
              Ações recomendadas
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Análises Recentes</CardTitle>
            <CardDescription>Necropsias realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Animal ID</TableHead>
                  <TableHead>Diagnóstico</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    data: '10/Nov',
                    id: 'A189',
                    diagnostico: 'Pneumonia bacteriana',
                    status: 'Concluído',
                  },
                  {
                    data: '07/Nov',
                    id: 'A156',
                    diagnostico: 'Septicemia',
                    status: 'Concluído',
                  },
                  {
                    data: '03/Nov',
                    id: 'A098',
                    diagnostico: 'Causa natural',
                    status: 'Concluído',
                  },
                ].map((analise, index) => (
                  <TableRow key={index}>
                    <TableCell>{analise.data}</TableCell>
                    <TableCell>{analise.id}</TableCell>
                    <TableCell>{analise.diagnostico}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        {analise.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Causas Identificadas</CardTitle>
            <CardDescription>Distribuição por diagnóstico (últimos 6 meses)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { causa: 'Pneumonia bacteriana', quantidade: 8, cor: 'bg-red-500', percentual: 35 },
                { causa: 'Septicemia', quantidade: 5, cor: 'bg-orange-500', percentual: 22 },
                { causa: 'Causa natural', quantidade: 7, cor: 'bg-blue-500', percentual: 30 },
                { causa: 'Outras', quantidade: 3, cor: 'bg-gray-500', percentual: 13 },
              ].map((causa) => (
                <div key={causa.causa} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{causa.causa}</span>
                    <span className="text-sm text-gray-900">
                      {causa.quantidade} ({causa.percentual}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${causa.cor} h-2 rounded-full`}
                      style={{ width: `${causa.percentual}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recomendações Preventivas</CardTitle>
          <CardDescription>
            Ações sugeridas baseadas nas análises recentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                titulo: 'Intensificar Controle de Pneumonia',
                descricao:
                  'Alta incidência de casos respiratórios. Revisar ventilação e vacinação.',
                prioridade: 'Alta',
              },
              {
                titulo: 'Monitoramento de Septicemia',
                descricao:
                  'Casos recorrentes sugerem possível foco de infecção. Análise microbiológica recomendada.',
                prioridade: 'Média',
              },
            ].map((rec, index) => (
              <div key={index} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-orange-900">{rec.titulo}</h4>
                  <Badge
                    variant={rec.prioridade === 'Alta' ? 'destructive' : 'outline'}
                    className={
                      rec.prioridade === 'Média' ? 'border-orange-500 text-orange-600' : ''
                    }
                  >
                    {rec.prioridade}
                  </Badge>
                </div>
                <p className="text-sm text-orange-700">{rec.descricao}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
