import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  private defaultConfig: Partial<ConfigModel> = {
    retryCount: 1,
  };
  private config: Partial<ConfigModel> = this.defaultConfig;
  setConfig(config: Partial<ConfigModel>): Partial<ConfigModel> {
    this.config = { ...this.config, ...config };
    return this.config;
  }
  getConfig() {
    return this.config;
  }
  setConfigProperty(key: string, value: any) {
    this.config = { ...this.config, ...{ key: value } };
  }
}
