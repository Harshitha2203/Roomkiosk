import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [ 
  { path: '', component:HomeComponent },
];

@NgModule({
  declarations: [ HomeComponent,],
  imports: [CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomemoduleModule { }
