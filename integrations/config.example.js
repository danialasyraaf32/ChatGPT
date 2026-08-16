// NOVA Integration configuration template.
// IMPORTANT: Never put real API keys, client secrets, passwords, or tokens in this file.
// This file is safe to commit because it contains placeholders only.

export const NOVA_INTEGRATIONS = {
  smartlife: {
    enabled: false,
    provider: 'tuya',
    backendEndpoint: '/api/integrations/tuya'
  },
  tapo: {
    enabled: false,
    backendEndpoint: '/api/integrations/tapo'
  },
  comfee: {
    enabled: false,
    backendEndpoint: '/api/integrations/comfee',
    model: 'CFS-18VGP'
  },
  v380: {
    enabled: false,
    backendEndpoint: '/api/integrations/v380'
  }
};
