import { Directive, HostBinding, HostListener, Input} from '@angular/core';

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

    @HostListener('dragstart', ['$event'])
    onDragStart(event) {
        const {zone = 'zone', data = {} } = this.options;
        this.dragService.startDrag(zone);
        // event.dataTransfer.setData('Text', JSON.stringify(data));
        event.dataTransfer.setData('Text', JSON.stringify(this.options));
    }



}