import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employeeRecords: any = [
    {eName: 'John', eCity: 'Vienna', eSalary: 4000 },
    {eName: 'Gergő', eCity: 'Miskolc', eSalary: 4000 },
    {eName: 'Ana', eCity: 'Budapest', eSalary: 6000 }
  ]

  public getRecord(): void {
    alert('Event emitted');
  }
}
