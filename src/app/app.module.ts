import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing.module';
import { PipeComponent } from './pipe/pipe.component';
import { UserValidatorPipe } from './user-validator.pipe';
import { FormsModule } from '@angular/forms';
import { OperatorsComponent } from './operators/operators.component';
import { OperationsPipe } from './operations.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    UserValidatorPipe,
    OperatorsComponent,
    OperationsPipe,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
