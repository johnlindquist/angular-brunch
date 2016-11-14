import 'zone.js/dist/zone'
import 'core-js/es7/reflect'
import '@angular/compiler'
import '@angular/platform-browser'
import { enableProdMode } from '@angular/core'
import 'rxjs'
let production = 'production';
if (production === 'BRUNCH_ENVIRONMENT') {
  enableProdMode();
}
