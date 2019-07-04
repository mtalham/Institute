package com.example.coding.institute.student

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import java.util.*

@Component
class StudentMutationResolver(private val studentService: StudentService): GraphQLMutationResolver {
    fun createStudent(firstName: String, lastName: String, email: String): Student =
        studentService.createStudent(firstName, lastName, email)

    fun modifyStudent(firstName: String, lastName: String, email: String, uuid: String): Student =
            studentService.modifyStudent(firstName, lastName, email, uuid)

    fun deleteStudent(uuid: String): Boolean =
            studentService.deleteStudent(uuid)
}