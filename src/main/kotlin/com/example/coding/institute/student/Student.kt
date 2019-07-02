package com.example.coding.institute.student

import lombok.Data
import java.util.*
import javax.persistence.*

@Data
@Entity
@Table(name = "student")
class Student(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int = -1,
    var firstName: String? = "",
    var lastName: String? = "",
    var email: String? = "",
    @Convert(disableConversion = true)
    val uuid: UUID = UUID.randomUUID()
)