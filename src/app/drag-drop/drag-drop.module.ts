import { NgModule } from '@angular/core';

import { DragService } from './drag.service';
import { DraggableDirective } from './draggable.directive';
import { DropTargetDirective } from './drop-target.directive';
@NgModule({
    declarations: [
        DraggableDirective,
        DropTargetDirective
    ],
    imports: [

    ],
    exports: [
        DraggableDirective,
        DropTargetDirective
    ],
    providers: [
        DragService
    ]
})
export class DrapDropModule {}
