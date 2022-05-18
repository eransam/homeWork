import { NotifyService } from 'src/app/services/notify.service';
import { EmployeesService } from '../../../services/employees.service';
import { EmployeesModel } from './../../../models/employees.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

    public employees: EmployeesModel[] = [];

    constructor(
        private EmployeesService: EmployeesService,
        private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
           this.employees = await this.EmployeesService.getAllEmployees();
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }

}
