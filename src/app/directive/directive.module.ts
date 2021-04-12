import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { FormsModule } from '@angular/forms';
import { TrackByComponent } from './trackBy/trackBy.component';

@NgModule({
  declarations: [DirectiveComponent, StructuralDirComponent, TrackByComponent],
  imports: [CommonModule, DirectiveRoutingModule, FormsModule],
})
export class DirectiveModule {}
