import { 
  Baby, 
  Ruler, 
  Scale, 
  HeartPulse, 
  Glasses, 
  Microscope, 
  ScanEye,
  TrendingUp,
  Activity,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PageType } from '../../App';
import { Badge } from '../ui/badge';

interface DashboardProps {
  onNavigate: (page: PageType) => void;
}

const products = [
  {
    id: 'maternidade' as PageType,
    title: 'Maternidade',
    description: 'Gestão e monitoramento de matrizes e leitões',
    icon: Baby,
    color: '#F3CBD3',
    stats: { active: 45, total: 50 },
    status: 'active'
  },
  {
    id: 'porcometro' as PageType,
    title: 'Porcômetro',
    description: 'Medição precisa e análise dimensional',
    icon: Ruler,
    color: '#428B94',
    stats: { active: 230, total: 250 },
    status: 'active'
  },
  {
    id: 'pesagem' as PageType,
    title: 'Pesagem',
    description: 'Controle de peso e desenvolvimento',
    icon: Scale,
    color: '#59AC83',
    stats: { active: 180, total: 200 },
    status: 'active'
  },
  {
    id: 'saude-monitorada' as PageType,
    title: 'Saúde Monitorada',
    description: 'Monitoramento contínuo de saúde',
    icon: HeartPulse,
    color: '#Ff8359',
    stats: { active: 195, total: 200 },
    status: 'warning'
  },
  {
    id: 'realidade-aumentada' as PageType,
    title: 'Realidade Aumentada',
    description: 'Visualização e análise com AR',
    icon: Glasses,
    color: '#949384',
    stats: { active: 12, total: 15 },
    status: 'active'
  },
  {
    id: 'necropsia-inteligente' as PageType,
    title: 'Necropsia Inteligente',
    description: 'Análise post-mortem automatizada',
    icon: Microscope,
    color: '#990000',
    stats: { active: 3, total: 5 },
    status: 'active'
  },
  {
    id: 'avaliacao-corporal' as PageType,
    title: 'Avaliação Corporal',
    description: 'Análise de condição corporal',
    icon: ScanEye,
    color: '#143139',
    stats: { active: 167, total: 200 },
    status: 'active'
  },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total de Animais</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-[#002B6B]">1.245</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-[#002B6B]">+12%</span> vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Sistemas Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-[#002B6B]">7/7</div>
            <p className="text-xs text-gray-500 mt-1">
              Todos operacionais
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Alertas Pendentes</CardTitle>
            <AlertCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-orange-600">5</div>
            <p className="text-xs text-gray-500 mt-1">
              Requer atenção
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Eficiência Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-[#002B6B]">94.2%</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-[#002B6B]">+2.1%</span> esta semana
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Products Grid */}
      <div>
        <div className="mb-4">
          <h2 className="text-gray-900">Produtos Disponíveis</h2>
          <p className="text-sm text-gray-500 mt-1">
            Selecione um produto para acessar suas funcionalidades
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            const utilizationPercent = Math.round((product.stats.active / product.stats.total) * 100);

            return (
              <Card
                key={product.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onNavigate(product.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg text-white" style={{ backgroundColor: product.color }}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {product.status === 'warning' && (
                      <Badge variant="outline" className="border-orange-500 text-orange-600">
                        Atenção
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Em uso</span>
                      <span className="text-gray-900">
                        {product.stats.active}/{product.stats.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${utilizationPercent}%`, backgroundColor: product.color }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      {utilizationPercent}% de utilização
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}