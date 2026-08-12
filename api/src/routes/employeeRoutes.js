import { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";
import { createEmployeeValidator, updateEmployeeValidator } from "../validators/employeeValidator.js";

export default [
    {
        method "POST",
        path: "/employees",
        options: {
            validate: {
                payload: createEmployeeValidator
            }
        },
        handler: createEmployee
    },
    {
        method: "GET",
        path: "/employees",
        handler: getEmployees
    },
    {
        method: "GET",
        path: "/employees/{id}",
        handler: getEmployeeById
    },
    {
        method: "PUT",
        path: "/employees/{id}",
        options: {
            validate: {
                payload: updateEmployeeValidator
            }
        },
        handler: updateEmployee
    },
    {
        method: "DELETE",
        path: "/employees/{id}",
        handler: deleteEmployee
    }
];