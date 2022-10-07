import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatFormFieldModule, } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports:
    [
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatChipsModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatInputModule




    ]

})

export class MaterialModule {}
