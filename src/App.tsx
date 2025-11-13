import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/pages/Dashboard';
import { Maternidade } from './components/pages/Maternidade';
import { Porcometro } from './components/pages/Porcometro';
import { Pesagem } from './components/pages/Pesagem';
import { SaudeMonitorada } from './components/pages/SaudeMonitorada';
import { RealidadeAumentada } from './components/pages/RealidadeAumentada';
import { NecropsiaInteligente } from './components/pages/NecropsiaInteligente';
import { AvaliacaoCorporal } from './components/pages/AvaliacaoCorporal';
import { Estatisticas } from './components/pages/Estatisticas';
import { Toaster } from './components/ui/sonner';

export type PageType = 
  | 'dashboard' 
  | 'maternidade' 
  | 'porcometro' 
  | 'pesagem' 
  | 'saude-monitorada' 
  | 'realidade-aumentada' 
  | 'necropsia-inteligente' 
  | 'avaliacao-corporal' 
  | 'estatisticas';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'maternidade':
        return <Maternidade />;
      case 'porcometro':
        return <Porcometro />;
      case 'pesagem':
        return <Pesagem />;
      case 'saude-monitorada':
        return <SaudeMonitorada />;
      case 'realidade-aumentada':
        return <RealidadeAumentada />;
      case 'necropsia-inteligente':
        return <NecropsiaInteligente />;
      case 'avaliacao-corporal':
        return <AvaliacaoCorporal />;
      case 'estatisticas':
        return <Estatisticas />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
      
      <Toaster />
    </div>
  );
}