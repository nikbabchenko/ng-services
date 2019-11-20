import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  baseUrl: string;
}

export const MOCK_CONFIG: ApiConfig = {
  baseUrl: 'http://localhost:3000'
};

export const API_CONFIG: ApiConfig = {
  baseUrl: 'http://some-prod.url'
};

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('app.config');
