import Alpine from 'alpinejs';

import invoiceData from './invoiceData';

// Alpine Store (Global State)
document.addEventListener('alpine:init', () => {
  // Form fields store
  Alpine.store('invoiceData', invoiceData);

  // Toggle action buttons store
  Alpine.store('actions', {
    visible: false,

    toggleActions() {
      this.visible = true;
    },
  });

  // Custom methods store
  Alpine.store('customMethods', {
    updateInvoiceNumber(ev: Event) {
      const elem = ev.target as HTMLInputElement;
      localStorage.setItem('invoiceNumber', elem.value);
    },
  });
});

// Start Alpine
declare global {
  interface Window {
    Alpine: any;
  }
}

window.Alpine = Alpine;

Alpine.start();