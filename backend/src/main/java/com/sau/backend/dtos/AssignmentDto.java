package com.sau.backend.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDto {
    private Integer id;
    private Integer driverId;
    private String driverName;
    private Integer vehicleId;
    private String vehicleBrand;
    private String vehicleModel;
    private LocalDate assignedDate;
    private LocalDate returnDate;
}
