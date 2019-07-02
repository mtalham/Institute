package com.example.coding.institute.student

import org.springframework.stereotype.Service
import java.util.*

@Service
class StudentService(private val studentRepository: StudentRepository) {
    fun getAllStudents(): List<Student> = studentRepository.findAll()

    fun createStudent(first: String, last: String, email: String): Student {
        val newStudent = Student().apply {
            firstName = first
            lastName = last
            this.email = email
        }
        return studentRepository.save(newStudent)
    }

    fun modifyStudent(first: String, last: String, email: String, uuid: String): Student {
        val existingStudent = studentRepository.findByUuid(UUID.fromString(uuid)) ?: throw error("student does not exist")
        existingStudent.firstName = first
        existingStudent.lastName = last
        existingStudent.email = email
        return studentRepository.save(existingStudent)
    }
}