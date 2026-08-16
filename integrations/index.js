// NOVA integration facade.
// The dashboard talks to this layer instead of knowing vendor-specific APIs.
// Real credentials stay server-side and will be injected later through env vars.

const state = {
  devices: [
    { id: 'comfee-main-ac', name: 'Comfee CFS-18VGP', type: 'climate', provider: 'comfee', status: 'demo', online: true },
    { id: 'tapo-socket-01', name: 'Tapo Socket 01', type: 'switch', provider: 'tapo', status: 'demo', online: true },
    { id: 'tapo-socket-02', name: 'Tapo Socket 02', type: 'switch', provider: 'tapo', status: 'demo', online: true },
    { id: 'tapo-vacuum', name: 'Tapo Vacuum', type: 'vacuum', provider: 'tapo', status: 'demo', online: true },
    { id: 'garage-light', name: 'Garage Light', type: 'light', provider: 'smartlife', status: 'demo', online: true },
    { id: 'garage-camera', name: 'Garage Camera', type: 'camera', provider: 'v380', status: 'demo', online: true }
  ]
};

export const NOVA = {
  async getDevices() {
    return structuredClone(state.devices);
  },

  async getDevice(id) {
    return structuredClone(state.devices.find(device => device.id === id) || null);
  },

  async getStatus(id) {
    const device = await this.getDevice(id);
    return device ? { ...device, demo: true } : null;
  }
};

export default NOVA;
