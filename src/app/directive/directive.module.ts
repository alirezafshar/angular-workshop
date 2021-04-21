import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { FormsModule } from '@angular/forms';
import { TrackByComponent } from './trackBy/trackBy.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [DirectiveComponent, StructuralDirComponent, TrackByComponent],
  imports: [CommonModule, DirectiveRoutingModule, HomeModule, FormsModule],
})
export class DirectiveModule {}
