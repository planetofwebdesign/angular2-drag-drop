import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  items1: any = [];
  items2: any = [];
  items3: any = [];
  items4: any = [];

  items: any[] = [{
    id: 1,
    name: 'Apple'
  }, {
    id: 2,
    name: 'Blackberry'
  }, {
    id: 3,
    name: 'HTC'
  }, {
    id: 4,
    name: 'Sony Ericson'
  }, {
    id: 5,
    name: 'Motorola'
  }, {
    id: 6,
    name: 'Nokia'
  }, {
    id: 7,
    name: 'Lenovo'
  }, {
    id: 8,
    name: 'Xiaomi'
  }, {
    id: 9,
    name: 'karbon'
  },
  {
    id: 11,
    name: 'Apple1'
  }, {
    id: 12,
    name: 'Blackberry1'
  }, {
    id: 13,
    name: 'HTC1'
  }, {
    id: 14,
    name: 'Sony 1'
  }, {
    id: 15,
    name: 'Motorola11'
  }, {
    id: 16,
    name: 'Nokia1'
  }, {
    id: 17,
    name: 'Lenovo1'
  }, {
    id: 18,
    name: 'Xiaomi1'
  }, {
    id: 19,
    name: 'karbon1'
  }];

  onDrop(options: any, dropZoneId: number) {

    if (dropZoneId === 1) {
      this.items1.push(options.data);
      this.removeDataoptions(options);
    } else if (dropZoneId === 2) {
      this.items2.push(options.data);
      this.removeDataoptions(options);
    } else if (dropZoneId === 3) {
      this.items3.push(options.data);
      this.removeDataoptions(options);
    } else if (dropZoneId === 4) {
      this.items4.push(options.data);
      this.removeDataoptions(options);
    }
  }

  findZoneData(options): any[] {
    if (options.zone === 'master') {
      return this.items;
    } else if (options.zone === 'dropZone1') {
      return this.items1;
    } else if (options.zone === 'dropZone2') {
      return this.items2;
    } else if (options.zone === 'dropZone3') {
      return this.items3;
    } else if (options.zone === 'dropZone4') {
      return this.items4;
    }
  }
  removeDataoptions(options: any) {

    let masterData: any[] = this.findZoneData(options);
    masterData.forEach((item, index) => {
      if (item.id === options.data.id) {
        masterData.splice(index, 1);
      }
    });

  }
}
