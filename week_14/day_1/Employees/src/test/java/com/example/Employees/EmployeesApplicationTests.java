package com.example.Employees;

import com.example.Employees.models.Employee;
import com.example.Employees.repositories.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmployeesApplicationTests {


	@Autowired
	private EmployeeRepository employeeRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveEmployee() {
		Employee employee = new Employee("John",33,1234,"mw@lol.pl");
		employeeRepository.save(employee);
	}

	@Test
	public void canGetAllEmployees() {
		employeeRepository.findAll();
	}

}
