import { environment } from '../../../../environments/environment';
import { EmployeesModel } from './../../../models/employees.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-employees-card',
    templateUrl: './employees-card.component.html',
    styleUrls: ['./employees-card.component.css']
})
export class EmployeesCardComponent {

    public employeesImagesUrl = environment.employeesImagesUrl;

    @Input()
    public employees: EmployeesModel;
}
