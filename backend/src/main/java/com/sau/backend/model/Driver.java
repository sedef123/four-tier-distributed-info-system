package com.sau.backend.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "drivers")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "driver_seq")
    @SequenceGenerator(name = "driver_seq", sequenceName = "drivers_id_seq", allocationSize = 1)
    private Integer id;

    private String name;
    private String address;
    private String phone;
}
