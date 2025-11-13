import { 
  LayoutDashboard, 
  Baby, 
  Ruler, 
  Scale, 
  HeartPulse, 
  Glasses, 
  Microscope, 
  ScanEye,
  BarChart3,
  X
} from 'lucide-react';
import { PageType } from '../App';
import { Button } from './ui/button';
import { cn } from './ui/utils';

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard' as PageType, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'maternidade' as PageType, label: 'Maternidade', icon: Baby },
  { id: 'porcometro' as PageType, label: 'Porcômetro', icon: Ruler },
  { id: 'pesagem' as PageType, label: 'Pesagem', icon: Scale },
  { id: 'saude-monitorada' as PageType, label: 'Saúde Monitorada', icon: HeartPulse },
  { id: 'realidade-aumentada' as PageType, label: 'Realidade Aumentada', icon: Glasses },
  { id: 'necropsia-inteligente' as PageType, label: 'Necropsia Inteligente', icon: Microscope },
  { id: 'avaliacao-corporal' as PageType, label: 'Avaliação Corporal', icon: ScanEye },
  { id: 'estatisticas' as PageType, label: 'Estatísticas', icon: BarChart3 },
];

export function Sidebar({ currentPage, onNavigate, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-emerald-600">AgriTech Pro</h2>
              <p className="text-xs text-gray-500 mt-1">Gestão Inteligente</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    if (window.innerWidth < 1024) {
                      onToggle();
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isActive
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-xs text-emerald-800">
              Versão 2.0.1
            </p>
            <p className="text-xs text-emerald-600 mt-1">
              © 2025 AgriTech Pro
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
