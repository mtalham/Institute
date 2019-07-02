package com.example.coding.institute.student

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class StudentQueryResolver(private val studentService: StudentService) : GraphQLQueryResolver {
    fun getAllStudents(): List<Student> = studentService.getAllStudents()
}