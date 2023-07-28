package com.example.Notes.App.service;

import com.example.Notes.App.dao.NoteDao;
import com.example.Notes.App.dto.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class EmployeeServiceImpl implements NoteService {

    @Autowired
    private NoteDao employeeDao;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeDao.save(employee);
    }

    @Override
    public Optional<Employee> getEmployee(int empId) {
        return employeeDao.findById(empId);
    }

    @Override
    public void deleteEmployee(int empId) {
        employeeDao.deleteById(empId);
    }

    @Override
    public void updateEmployee(Employee employee) {
        employeeDao.deleteById(employee.getEmpId());
        employeeDao.save(employee);
    }
}
