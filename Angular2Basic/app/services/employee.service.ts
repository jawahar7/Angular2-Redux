import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    getEmployee() {
        return [
            {id: 1, name: "jawahar", address: "Madurai"},
            {id: 2, name: "zzz", address: "Chennai"}
        ]                    
    }
}