import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeneratorService {
  generate(n: number): string {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  getNewID() {
    return genID().next().value;
  }
}
