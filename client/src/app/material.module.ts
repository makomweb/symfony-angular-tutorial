import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({ 
    exports: [ 
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule
    ]})

export class MaterialModule { }