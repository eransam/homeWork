import { NotifyService } from 'src/app/services/notify.service';
import { environment } from '../../../../environments/environment';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesModel } from 'src/app/models/employees.model';

@Component({
    selector: 'app-employees-details',
    templateUrl: './employees-details.component.html',
    styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

    public EmployeesImagesUrl = environment.employeesImagesUrl;
    
    public employees: EmployeesModel;

    constructor(
        private activatedRoute: ActivatedRoute,
        private employeesService: EmployeesService,
        private router: Router,
        private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
            const id = this.activatedRoute.snapshot.params["id"];
            this.employees = await this.employeesService.getOneEmployees(id);
            console.log(this.employees);
            
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }

    async deleteEmployees() {
        try {
            const ok = confirm("Are you sure?");
            if(!ok) return;
            await this.employeesService.deleteEmployees(this.employees.id);
            this.notifyService.success("employees has been deleted");
            this.router.navigateByUrl("/employees");
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }

}
