import { Injectable } from '@angular/core';

@Injectable()
export class DragService {

    private zone: string;
    private isDragFailed: string = '';
    startDrag(zone: string) {
        this.zone = zone;
    }

    accept(zone): boolean {
        if(zone === this.zone) {
            this.isDragFailed = 'no';
            return true;
        } else{
            this.isDragFailed = 'yes';
        }
        // return zone === this.zone;
    }

    getDragFailed() {
        debugger;
        return this.isDragFailed;
    }
}