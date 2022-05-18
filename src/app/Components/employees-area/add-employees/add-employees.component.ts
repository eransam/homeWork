import { EmployeesService } from '../../../services/employees.service';
import { EmployeesModel } from './../../../models/employees.model';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-add-employees',
    templateUrl: './add-employees.component.html',
    styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {

    // Two-Way binding must be into an empty existing object:
    public employees = new EmployeesModel();

    // Bind to the <input type="file" ... > 
    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>

    constructor(
        private EmployeesService: EmployeesService,
        private router: Router,
        private notifyService: NotifyService) { }

    async add() {
        try {
            this.employees.image = this.imageBoxRef.nativeElement.files[0];        
            const addedEmployees = await this.EmployeesService.addEmployees(this.employees);
            this.notifyService.success("employees has been added, id: " + addedEmployees.id);
            this.router.navigateByUrl("/employees");
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }
    
}
