package com.codeclan.example.WhiskyTracker.controllers;

import com.codeclan.example.WhiskyTracker.models.Distillery;
import com.codeclan.example.WhiskyTracker.models.Whisky;
import com.codeclan.example.WhiskyTracker.repositories.DistilleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DistilleryController {

    @Autowired
    DistilleryRepository distilleryRepository;

    @GetMapping (value = "/distilleries")
    public ResponseEntity<List<Distillery>> getAllDistilleries(@RequestParam(required = false) Optional<String> region, Optional<Integer> age) {

        if (region.isPresent()) {
            return new ResponseEntity<>(distilleryRepository.findByRegion(region.get()), HttpStatus.OK);
        } else if (age.isPresent()) {
            return new ResponseEntity<>(distilleryRepository.findByWhiskiesAge(age.get()),HttpStatus.OK);
        }
        return new ResponseEntity<>(distilleryRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping (value= "/distilleries/{id}")
    public ResponseEntity getDistillery(@PathVariable Long id) {
        return new ResponseEntity<>(distilleryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping (value= "/distilleries")
    public ResponseEntity<Distillery> postDistillery(@RequestBody Distillery distillery) {
        distilleryRepository.save(distillery);
        return new ResponseEntity<>(distillery, HttpStatus.CREATED);
    }





}
