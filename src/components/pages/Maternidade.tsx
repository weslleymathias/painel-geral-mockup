import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Baby, Heart, AlertTriangle, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const matrizes = [
  { id: 'M001', nome: 'Matriz Alpha', leitoes: 12, status: 'Ativo', saude: 'Excelente', dias: 5 },
  { id: 'M002', nome: 'Matriz Beta', leitoes: 10, status: 'Ativo', saude: 'Bom', dias: 8 },
  { id: 'M003', nome: 'Matriz Gamma', leitoes: 11, status: 'Atenção', saude: 'Atenção', dias: 12 },
  { id: 'M004', nome: 'Matriz Delta', leitoes: 9, status: 'Ativo', saude: 'Excelente', dias: 3 },
  { id: 'M005', nome: 'Matriz Epsilon', leitoes: 13, status: 'Ativo', saude: 'Bom', dias: 15 },
];

export function Maternidade() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Maternidade</h2>
        <p className="text-sm text-gray-500 mt-1">
          Gestão e monitoramento de matrizes e leitões
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card style={{ borderTop: '4px solid #F3CBD3' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Matrizes Ativas</CardTitle>
            <Baby className="h-4 w-4" style={{ color: '#F3CBD3' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#990055' }}>45/50</div>
            <Progress value={90} className="mt-2" style={{ backgroundColor: '#FBF1F3' }} />
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #F3CBD3' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total de Leitões</CardTitle>
            <Heart className="h-4 w-4" style={{ color: '#F3CBD3' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#990055' }}>523</div>
            <p className="text-xs text-gray-500 mt-1">
              Média de 11.6 por matriz
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #F3CBD3' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Taxa de Sobrevivência</CardTitle>
            <CheckCircle className="h-4 w-4" style={{ color: '#F3CBD3' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#990055' }}>96.8%</div>
            <p className="text-xs text-gray-500 mt-1">
              +1.2% vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #Ff8359' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Alertas</CardTitle>
            <AlertTriangle className="h-4 w-4" style={{ color: '#Ff8359' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#990000' }}>3</div>
            <p className="text-xs text-gray-500 mt-1">
              Requer atenção
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabela de Matrizes */}
      <Card>
        <CardHeader>
          <CardTitle>Matrizes em Monitoramento</CardTitle>
          <CardDescription>
            Status atual das matrizes no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Leitões</TableHead>
                <TableHead>Dias Pós-Parto</TableHead>
                <TableHead>Saúde</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matrizes.map((matriz) => (
                <TableRow key={matriz.id}>
                  <TableCell>{matriz.id}</TableCell>
                  <TableCell>{matriz.nome}</TableCell>
                  <TableCell>{matriz.leitoes}</TableCell>
                  <TableCell>{matriz.dias} dias</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      style={
                        matriz.saude === 'Excelente'
                          ? { borderColor: '#59AC83', color: '#006633' }
                          : matriz.saude === 'Bom'
                          ? { borderColor: '#428B94', color: '#143139' }
                          : { borderColor: '#Ff8359', color: '#990000' }
                      }
                    >
                      {matriz.saude}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={matriz.status === 'Ativo' ? 'default' : 'destructive'}
                      style={matriz.status === 'Ativo' ? { backgroundColor: '#F3CBD3', color: '#990055' } : {}}
                    >
                      {matriz.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}