import { Injectable } from '@angular/core';
import { Plate } from '../models/plate';

@Injectable({
    providedIn: 'root'
})
export class PlateService {
    private plateModel: Plate;
    private response: boolean;
    private config = {
        morningStart: 6,
        morningEnd: 10,
        minutes: 30,
        afterStart: 15,
        afterEnd: 21
    };
    private data = [
        {
            id: 1,
            day: 'Monday',
            plate1: 1,
            plate2: 2
        },
        {
            id: 2,
            day: 'Tuesday',
            plate1: 3,
            plate2: 4
        },
        {
            id: 3,
            day: 'Wednesday',
            plate1: 5,
            plate2: 6
        },
        {
            id: 4,
            day: 'Thursday',
            plate1: 7,
            plate2: 8
        },
        {
            id: 5,
            day: 'Friday',
            plate1: 9,
            plate2: 0
        },
      ];

      constructor() {
      }

      getInfo(plate: Plate) {
          this.response = false;
          let numberPlate: string;
          numberPlate =  plate.plate.toString();
          numberPlate =  numberPlate.charAt(numberPlate.length - 1);
          this.data.filter( (x) => {
              if (x.id === plate.day) {
                  if (x.plate1 === Number(numberPlate) || x.plate2 === Number(numberPlate) ) {
                    if ((plate.time > this.config.morningStart && (plate.time < this.config.morningEnd &&
                        plate.minutes < this.config.minutes ))  || (plate.time > this.config.afterStart &&
                        (plate.time < this.config.afterEnd && plate.minutes < 31))) {
                        this.response = true;
                    }
                  }
              }
          });

          return this.response;
      }
}
