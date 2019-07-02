package com.example.coding.institute.student

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import java.util.*

@Component
class StudentMutationResolver(private val studentService: StudentService): GraphQLMutationResolver {
    fun createStudent(first: String, last: String, email: String): Student =
        studentService.createStudent(first, last, email)

    fun modifyStudent(first: String,last: String, email: String, uuid: String): Student =
            studentService.modifyStudent(first, last, email, uuid)
}