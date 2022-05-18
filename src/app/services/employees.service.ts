import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesModel } from '../models/employees.model';
import { firstValueFrom } from 'rxjs';
import store from '../redux/store';
import { addEmployeesAction } from '../redux/employees-state';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    this: any;

    constructor(private http: HttpClient) { }

    public async getAllEmployees(): Promise<EmployeesModel[]> {
        const AllEmployees = await firstValueFrom(this.http.get<EmployeesModel[]>(environment.employeesUrl));
        return AllEmployees;
    }

    public async getOneEmployees(id: number): Promise<EmployeesModel> {
        const employees = await firstValueFrom(this.http.get<EmployeesModel>(environment.employeesUrl + id));
        return employees;
    }

    public async addEmployees(employees: EmployeesModel): Promise<EmployeesModel> {

        // Convert ProductModel into FormData:
        const formData = new FormData();
        formData.append("firstName", employees.firstName);
        formData.append("lastName", employees.lastName);
        formData.append("title", employees.title);
        formData.append("country", employees.country);
        formData.append("city", employees.city);
        formData.append("birthDate", employees.birthDate.toString());
        formData.append("image", employees.image);

        const addedemployees = await firstValueFrom(this.http.post<EmployeesModel>(environment.employeesUrl, formData));

        store.dispatch(addEmployeesAction(addedemployees));

        return addedemployees;
    }


    public async updateEmployees(employees: EmployeesModel): Promise<EmployeesModel> {
        const formData = new FormData();
        formData.append("id", employees.id.toString());
        formData.append("firstName", employees.firstName);
        formData.append("lastName", employees.lastName);
        formData.append("title", employees.title);
        formData.append("country", employees.country);
        formData.append("city", employees.city);
        formData.append("birthDate", employees.birthDate.toString());
        formData.append("image", employees.image);

        const updatedEmployees = await firstValueFrom(this.http.put<EmployeesModel>(environment.employeesUrl + employees.id, formData));
        return updatedEmployees;
    }



    public async deleteEmployees(id: number): Promise<void> {
        await firstValueFrom(this.http.delete(environment.employeesUrl + id));
    }


}
