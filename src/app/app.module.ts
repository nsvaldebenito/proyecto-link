import {
  WalletManagementBfclModuleLazy,
  walletManagementConfigProvider,
} from '@omnichannel2-commercial-plataform-wallet-management/front-bfcl/lazy';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => WalletManagementBfclModuleLazy,
        },
      ],
      {
        initialNavigation: 'enabled',
        onSameUrlNavigation: 'reload',

      }
    ),
  ],
  providers: [
		walletManagementConfigProvider({ apiDomain: 'http://localhost:3000', enableClient: false })
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
