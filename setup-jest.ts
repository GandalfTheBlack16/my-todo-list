// Configurar Zone.js para testing
import 'zone.js';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Configurar el test environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Configuración adicional para tests
Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(window, 'getComputedStyle', {value: () => ({
  display: 'none',
  appearance: ['-webkit-appearance']
})});

Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {configurable: true, value: 1});
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {configurable: true, value: 1});