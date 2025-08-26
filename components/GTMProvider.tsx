'use client';

import { useEffect } from 'react';

/**
 * Componente responsável por verificar e gerenciar o Google Tag Manager
 * O script principal já está no layout.tsx para carregamento mais rápido
 */
const GTMProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Verifica se estamos no lado do cliente
    if (typeof window === 'undefined') {
      return;
    }

    // Aguarda um pouco para o GTM carregar e então verifica
    const checkGTM = () => {
      const gtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
      const gtmNoscript = document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]');
      
      console.log('🔍 GTM Debug Info:', {
        environment: process.env.NODE_ENV,
        url: window.location.href,
        basePath: '/metodoelg',
        gtmId: 'GTM-K3SBSHG5'
      });
      
      if (gtmScript) {
        console.log('✅ GTM: Script encontrado no DOM');
      } else {
        console.warn('❌ GTM: Script NÃO encontrado no DOM');
      }
      
      if (gtmNoscript) {
        console.log('✅ GTM: Noscript encontrado no DOM');
      } else {
        console.warn('❌ GTM: Noscript NÃO encontrado no DOM');
      }
      
      // Verifica se o dataLayer existe
      if (window.dataLayer) {
        console.log('✅ GTM: dataLayer disponível', {
          length: window.dataLayer.length,
          items: window.dataLayer.slice(0, 3) // Mostra apenas os primeiros 3 itens
        });
      } else {
        console.warn('❌ GTM: dataLayer NÃO disponível');
      }
      
      // Verifica se o Google Analytics está funcionando
      if (window.gtag) {
        console.log('✅ GTM: gtag function disponível');
      } else {
        console.log('ℹ️ GTM: gtag function não encontrada (normal se não estiver usando GA4 diretamente)');
      }
    };

    // Verifica imediatamente
    checkGTM();
    
    // Verifica novamente após 2 segundos para dar tempo do GTM carregar
    setTimeout(checkGTM, 2000);
  }, []);

  return <>{children}</>;
};

export default GTMProvider;