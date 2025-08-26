/**
 * Utilitários para Google Tag Manager
 * Funções para enviar eventos customizados e gerenciar o dataLayer
 */

// Declara o tipo global para o dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Envia um evento customizado para o GTM
 * @param eventName Nome do evento
 * @param parameters Parâmetros adicionais do evento
 */
export const sendGTMEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window === 'undefined') {
    console.log('GTM Event (Server):', eventName, parameters);
    return;
  }

  try {
    // Inicializa o dataLayer se não existir
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Envia o evento
    const eventData = {
      event: eventName,
      ...parameters,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_path: window.location.pathname
    };

    window.dataLayer.push(eventData);
    
    console.log('📊 GTM Event Sent:', eventData);
  } catch (error) {
    console.error('❌ Erro ao enviar evento GTM:', error);
  }
};

/**
 * Envia evento de conversão (lead form submission)
 * @param formData Dados do formulário
 */
export const sendLeadConversion = (formData: {
  nome: string;
  email: string;
  empresa: string;
  segmento: string;
  [key: string]: any;
}) => {
  sendGTMEvent('lead_conversion', {
    event_category: 'Lead Generation',
    event_label: 'Método ELG Form',
    lead_name: formData.nome,
    lead_email: formData.email,
    lead_company: formData.empresa,
    lead_segment: formData.segmento,
    conversion_id: `lead_${Date.now()}`,
    value: 1 // Valor simbólico para a conversão
  });
};

/**
 * Envia evento de pageview customizado
 * @param pageName Nome da página
 * @param additionalData Dados adicionais
 */
export const sendPageView = (pageName: string, additionalData: Record<string, any> = {}) => {
  sendGTMEvent('page_view', {
    event_category: 'Page View',
    page_name: pageName,
    ...additionalData
  });
};

/**
 * Envia evento de clique em botão
 * @param buttonName Nome/ID do botão
 * @param section Seção onde o botão está localizado
 */
export const sendButtonClick = (buttonName: string, section: string = '') => {
  sendGTMEvent('button_click', {
    event_category: 'User Interaction',
    event_label: buttonName,
    button_name: buttonName,
    section: section
  });
};

/**
 * Verifica se o GTM está carregado corretamente
 * @returns boolean indicando se o GTM está funcionando
 */
export const isGTMLoaded = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return !!window.dataLayer && window.dataLayer.length > 0;
};

/**
 * Obtém informações de debug do GTM
 * @returns Objeto com informações de debug
 */
export const getGTMDebugInfo = () => {
  if (typeof window === 'undefined') {
    return { environment: 'server', loaded: false };
  }

  return {
    environment: process.env.NODE_ENV,
    loaded: isGTMLoaded(),
    dataLayerLength: window.dataLayer?.length || 0,
    hasGtag: !!window.gtag,
    currentUrl: window.location.href,
    basePath: '/metodoelg'
  };
};