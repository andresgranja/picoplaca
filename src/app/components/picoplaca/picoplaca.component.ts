import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { PlateService } from 'src/app/services/plate.service';
import { Plate } from '../../models/plate';
import { Validations } from '../../utils/validations';

@Component({
  selector: 'app-picoplaca',
  templateUrl: './picoplaca.component.html',
  styleUrls: ['./picoplaca.component.css'],
  providers: [MessageService, Validations]
})
export class PicoplacaComponent implements OnInit {

  plateModel: Plate = { plate: 0, date: '', day: 0, time: 0, minutes: 0};

  plate: number;
  date: Date;
  time: Date;
  error: boolean;

  constructor(private datePipe: DatePipe,
              private plateService: PlateService,
              private messageService: MessageService,
              private validation: Validations) { }

  ngOnInit() {
  }

  getData() {
    this.plateModel.plate = Number(this.plate);
    this.plateModel.date = this.datePipe.transform(this.date, 'dd-MM-yyyy');
    this.plateModel.day = this.date.getDay();
    this.plateModel.time = this.time.getHours();
    this.plateModel.minutes = this.time.getMinutes();
  }

  sendData() {
    this.getData();
    const res = this.plateService.getInfo(this.plateModel);
    if (!res) {
      this.error = false;
      this.showMessage('License plate number is allowed to transit on the required date and time.', 'success');
    } else {
      this.error = true;
      this.showMessage('License plate number is NOT allowed to transit on the required date and time.', 'error');
    }

  }

  showMessage(message: string, type: string) {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, life: 2000, severity: type, summary: message});
}

}
