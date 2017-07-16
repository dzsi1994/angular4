import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'app-data-component',
    template: `
    <h3>Name: <span style="color:green; font-size:18px;">{{employeeName}}</span></h3>
    <h3>City: <span style="color:green; font-size:18px;">{{employeeCity}}</span></h3>
    <h3>Salary: <span style="color:green; font-size:18px;">{{employeeSalary}}</span></h3>
    <hr>
    <button (click)="selectRecord()">Select Record</button>
    `
})
export class DataComponent {
    @Input('name') employeeName: string;
    @Input('city') employeeCity: string;
    @Input('salary') employeeSalary: number;
    @Output() sendRecord: EventEmitter<any> = new EventEmitter();

    public selectRecord() {
        this.sendRecord.emit();
    }
}
