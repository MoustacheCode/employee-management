import { prisma } from "../prisma/client.js";

// Create a new employee
export const createEmployee = async (request, h) => {
    const data = request.payload; // Grab the data sent from frontend

    const employee = await prisma.employee.create({
        data,
    });

    return h.response(employee).code(201); // Database creates new row with the data
};

// Get a list of all employees
export const getEmployees = async (request, h) => {
    return prisma.employee.findMany(); // Returns all employees
};

// Get an employee by their ID
export const getEmployeeById = async (request, h) => {
    const { id } = request.params; // Use ID from request params

    const employee = await prisma.employee.findUnique({
        where: { id: Number(id) }, // Converts the ID to a number as stored as integer in Database
        include: { contracts: true }, // Include any contracts associated with the employee
    });

    // If id doesn't exist, return an error
    if (!employee) {
        return h.response({ error: "Employee doesn't exist" }).code(404);
    }

    // Returns employee
    return employee;
};

// Update employee information

export const updateEmployee = async (request, h) => {
    const { id } = request.params; // Get ID
    const data = request.payload; // Get the data from frontend to update

    const employee = await prisma.employee.update({
        where: { id: Number(id) }, // Finds them with their ID
        data, // Applies the data from the frontend
    });

    return employee; // Returns employee with updated info
};

// Delete Employee

export const deleteEmployee = async (request, h) => {
    const { id } = request.params; // Get employee ID

    await prisma.employee.delete({
        where: { id: Number(id) }, // Tells DB to delete employee with given ID
    });

    return h.response({ message: `Employee ${id} was deleted` }).code(200); // Return message to confirm deleted
};
