import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [MatButtonModule,MatIconModule],
  exports: [MatButtonModule,MatIconModule],
  declarations: []
})
export class MaterialModule { }
