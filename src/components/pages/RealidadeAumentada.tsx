import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Glasses, Scan, Layers, Smartphone } from 'lucide-react';
import { Button } from '../ui/button';

export function RealidadeAumentada() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900">Realidade Aumentada</h2>
        <p className="text-sm text-gray-500 mt-1">
          Visualização e análise de dados com tecnologia AR
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card style={{ borderTop: '4px solid #E6E4D2' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Dispositivos AR</CardTitle>
            <Glasses className="h-4 w-4" style={{ color: '#949384' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#143139' }}>12/15</div>
            <p className="text-xs text-gray-500 mt-1">
              Ativos e conectados
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #E6E4D2' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Sessões Ativas</CardTitle>
            <Scan className="h-4 w-4" style={{ color: '#949384' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#143139' }}>8</div>
            <p className="text-xs text-gray-500 mt-1">
              Em uso no momento
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #E6E4D2' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Análises Hoje</CardTitle>
            <Layers className="h-4 w-4" style={{ color: '#949384' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#143139' }}>47</div>
            <p className="text-xs text-gray-500 mt-1">
              +12 vs. ontem
            </p>
          </CardContent>
        </Card>

        <Card style={{ borderTop: '4px solid #E6E4D2' }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Tempo Médio</CardTitle>
            <Smartphone className="h-4 w-4" style={{ color: '#949384' }} />
          </CardHeader>
          <CardContent>
            <div style={{ color: '#143139' }}>8.5 min</div>
            <p className="text-xs text-gray-500 mt-1">
              Por sessão
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Funcionalidades AR</CardTitle>
            <CardDescription>Recursos disponíveis no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  nome: 'Visualização de Dados em Tempo Real',
                  descricao: 'Sobreposição de métricas vitais',
                  status: 'Ativo',
                },
                {
                  nome: 'Identificação Automática',
                  descricao: 'Reconhecimento facial de animais',
                  status: 'Ativo',
                },
                {
                  nome: 'Histórico 3D',
                  descricao: 'Visualização tridimensional de evolução',
                  status: 'Beta',
                },
                {
                  nome: 'Análise Corporal AR',
                  descricao: 'Medições corporais em AR',
                  status: 'Ativo',
                },
              ].map((func) => (
                <div key={func.nome} className="flex items-start justify-between p-4 rounded-lg" style={{ backgroundColor: '#F2F1E8' }}>
                  <div className="flex-1">
                    <p className="text-gray-900">{func.nome}</p>
                    <p className="text-xs text-gray-500 mt-1">{func.descricao}</p>
                  </div>
                  <Badge
                    variant="outline"
                    style={
                      func.status === 'Ativo'
                        ? { borderColor: '#59AC83', color: '#006633' }
                        : { borderColor: '#428B94', color: '#143139' }
                    }
                  >
                    {func.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sessões Recentes</CardTitle>
            <CardDescription>Últimas utilizações do sistema AR</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { usuario: 'Carlos Silva', funcao: 'Análise Corporal', duracao: '12 min', hora: '14:23' },
                { usuario: 'Ana Santos', funcao: 'Identificação', duracao: '6 min', hora: '13:45' },
                { usuario: 'Pedro Costa', funcao: 'Dados em Tempo Real', duracao: '15 min', hora: '12:10' },
                { usuario: 'Maria Oliveira', funcao: 'Histórico 3D', duracao: '8 min', hora: '11:30' },
              ].map((sessao, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F2F1E8' }}>
                  <div>
                    <p className="text-gray-900">{sessao.usuario}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {sessao.funcao} • {sessao.duracao}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">{sessao.hora}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Iniciar Nova Sessão AR</CardTitle>
          <CardDescription>
            Conecte-se a um dispositivo AR para começar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <Glasses className="h-16 w-16 mb-4" style={{ color: '#949384' }} />
            <p className="text-gray-700 mb-2">Dispositivos disponíveis: 4</p>
            <p className="text-sm text-gray-500 mb-6">
              Conecte seus óculos AR ou use o app mobile
            </p>
            <div className="flex gap-3">
              <Button style={{ backgroundColor: '#143139' }} className="hover:opacity-90">
                Conectar Óculos AR
              </Button>
              <Button variant="outline">Usar App Mobile</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}