import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { DragService } from './drag.service';
import { DropTargetOptions } from './drag-drop.model';

@Directive({
    selector: '[ng2DropTarget]'
})
export class DropTargetDirective {

    private options: DropTargetOptions = {};
    constructor(private dragService: DragService) { }

    @Input()
    set ng2DropTarget(options: DropTargetOptions) {
        if (options) {
            this.options = options;
        }
    }

    @Output()
    ng2Drop = new EventEmitter();

    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event) {
        const { zone = 'zone'} = this.options;

        if (this.dragService.accept(zone)) {
            event.preventDefault();
        }
    }

    @HostListener('drop',['$event'])
    onDrop(event) {
       
        const data = JSON.parse(event.dataTransfer.getData('Text'));
        this.ng2Drop.next(data);
    }
}