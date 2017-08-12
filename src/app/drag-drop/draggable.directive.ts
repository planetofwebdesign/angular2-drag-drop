import { Directive, HostBinding, HostListener, Input, Output, EventEmitter} from '@angular/core';

import { DragService } from './drag.service';
import { DraggableOptions } from './drag-drop.model';
@Directive({
    selector: '[ng2Draggable]'
})
export class DraggableDirective {

    options: DraggableOptions = {};

    constructor(private dragService: DragService) {}

    @HostBinding('draggable')
    get draggable() {
        return true;
    }

    @Input()
    set ng2Draggable(options: DraggableOptions) {
        if(options) {
            this.options = options;
        }
    }

    @Output()
    ng2DragEnd = new EventEmitter();


    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const {zone = 'zone', data = {} } = this.options;
        this.dragService.startDrag(zone);
        // event.dataTransfer.setData('Text', JSON.stringify(data));
        event.dataTransfer.setData('Text', JSON.stringify(this.options));
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(event) {
        debugger;
        if (this.dragService.getDragFailed() === 'no') {
            debugger;
           this.ng2DragEnd.next(null);
        }
        
    }



}