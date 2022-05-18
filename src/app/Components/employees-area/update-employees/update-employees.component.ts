import { NotifyService } from 'src/app/services/notify.service';
import { EmployeesService } from '../../../services/employees.service';
import { EmployeesModel } from './../../../models/employees.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-update-employees',
    templateUrl: './update-employees.component.html',
    styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

    public employees: EmployeesModel;

    public employeesForm: FormGroup;
    public firstNameInput: FormControl;
    public lastNameInput: FormControl;
    public titleInput: FormControl;
    public countryInput: FormControl;
    public cityInput: FormControl;
    public birthDateInput: FormControl;
    public imageInput: FormControl;


    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private employeesService: EmployeesService,
        private router: Router,
        private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
            const id = this.activatedRoute.snapshot.params["id"];
            this.employees = await this.employeesService.getOneEmployees(id);



            this.firstNameInput = new FormControl(this.employees.firstName);
            this.lastNameInput = new FormControl(this.employees.lastName);
            this.titleInput = new FormControl(this.employees.title);
            this.countryInput = new FormControl(this.employees.country);
            this.cityInput = new FormControl(this.employees.city);
            this.birthDateInput = new FormControl(this.employees.birthDate);
            this.imageInput = new FormControl();
            this.employeesForm = new FormGroup({
                firstNameBox: this.firstNameInput,
                lastNameBox: this.lastNameInput,
                titleBox: this.titleInput,
                countryBox: this.countryInput,
                cityBox: this.cityInput,
                birthDateBox: this.birthDateInput,
                imageBox: this.imageInput
            });
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }



    public async update() {
        try {
            this.employees.firstName = this.firstNameInput.value;
            this.employees.lastName = this.lastNameInput.value;
            this.employees.title = this.titleInput.value;
            this.employees.country = this.countryInput.value;
            this.employees.city = this.cityInput.value;
            this.employees.birthDate = this.birthDateInput.value;
            this.employees.image = this.imageBoxRef.nativeElement.files[0];
            await this.employeesService.updateEmployees(this.employees);
            this.notifyService.success("employees has been updated");
            this.router.navigateByUrl("/employees");
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }

}
