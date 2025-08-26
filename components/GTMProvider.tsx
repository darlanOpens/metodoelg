'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTMProvider = ({ children }: { children: React.ReactNode }) => {
  const tagManagerArgs = {
    gtmId: 'GTM-K3SBSHG5'
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <>{children}</>;
};

export default GTMProvider; 