import { InjectionToken } from '@angular/core';

export interface AppConfig {
  App: string;
  Ver: string;
  API_URL: string;
}

export const APP_DI_CONFIG: AppConfig = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'http://...',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
