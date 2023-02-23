package com.example.Employees.controllers;


import com.example.Employees.models.Employee;
import com.example.Employees.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @GetMapping(value="/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }



}
