import i18next from "i18next";

i18next.init({
  debug: false,
  fallbackLng: 'en',
  resources: {
    
  },
});

i18next.changeLanguage(navigator?.language || 'en');

export const i18n = i18next;