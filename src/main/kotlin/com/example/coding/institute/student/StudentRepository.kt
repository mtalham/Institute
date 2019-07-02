package com.example.coding.institute.student

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface StudentRepository: JpaRepository<Student, Int> {
    fun findByUuid(uuid: UUID): Student?
}