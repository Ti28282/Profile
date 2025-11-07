import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CallGoHeader } from './components/callgo/CallGoHeader';
import { CallGoHero } from './components/callgo/CallGoHero';
import { Features } from './components/callgo/Features';
import { HowItWorksSection } from './components/callgo/HowItWorksSection';
import { Pricing } from './components/callgo/Pricing';
import { AuthDialog } from './components/callgo/AuthDialog';
import { CallGoFooter } from './components/callgo/CallGoFooter';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const handleAuthClick = () => {
    setAuthDialogOpen(true);
  };

  const handleSelectPlan = (plan: string) => {
    if (plan === 'Бесплатный') {
      setAuthDialogOpen(true);
    } else if (plan === 'Корпоративный') {
      // Open contact form or email
      window.location.href = 'mailto:sales@callgo.ru?subject=Корпоративный тариф';
    } else {
      setAuthDialogOpen(true);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
        <CallGoHeader onAuthClick={handleAuthClick} />
        
        <main>
          <CallGoHero onGetStarted={handleAuthClick} />
          <Features />
          <HowItWorksSection />
          <Pricing onSelectPlan={handleSelectPlan} />
        </main>

        <CallGoFooter />

        <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
        
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
