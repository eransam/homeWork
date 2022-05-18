import { EmployeesModel } from "../models/employees.model";

// Products State - products data needed in the application level:
export class EmployeesState {
    public employees: EmployeesModel[] = [];
}

// Products Action Type - any action which can be done on the above products state:
export enum EmployeesActionType {
    FetchEmployees = "FetchEmployees",
    AddEmployees = "AddEmployees",
    UpdateEmployees = "UpdateEmployees",
    DeleteEmployees = "DeleteEmployees"
}

// Products Action - any single object sent to the store during "dispatch":
export interface EmployeesAction {
    type: EmployeesActionType;
    payload: any;
}

export function fetchEmployeesAction(employees: EmployeesModel[]): EmployeesAction {
    return { type: EmployeesActionType.FetchEmployees, payload: employees };
}
export function addEmployeesAction(employees: EmployeesModel): EmployeesAction {
    return { type: EmployeesActionType.AddEmployees, payload: employees };
}
export function updateEmployeesAction(employees: EmployeesModel): EmployeesAction {
    return { type: EmployeesActionType.UpdateEmployees, payload: employees };
}
export function deleteEmployeesAction(id: number): EmployeesAction {
    return { type: EmployeesActionType.DeleteEmployees, payload: id };
}

// Products Reducer - the main function performing any action on products state:
// the new ProductsState() is a default value for the first time only
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    // Must duplicate the current state and not touch the given current state: 
    const newState = { ...currentState };

    switch (action.type) {

        case EmployeesActionType.FetchEmployees:
            newState.employees = action.payload; // Here the payload is the products list.
            break;

        case EmployeesActionType.AddEmployees:
            newState.employees.push(action.payload); // Here the payload is a single object to add.
            break;

        case EmployeesActionType.UpdateEmployees:
            const indexToUpdate = newState.employees.findIndex(p => p.id === action.payload.id); // Here the payload is a single object to update.
            if (indexToUpdate >= 0) {
                newState.employees[indexToUpdate] = action.payload;
            }
            break;

        case EmployeesActionType.DeleteEmployees:
            const indexToDelete = newState.employees.findIndex(p => p.id === action.payload); // Here the payload is the id to delete.
            if (indexToDelete >= 0) {
                newState.employees.splice(indexToDelete, 1);
            }
            break;
    }

    return newState;
}
