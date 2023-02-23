package com.codeclan.example.WhiskyTracker.controllers;

import com.codeclan.example.WhiskyTracker.models.Whisky;
import com.codeclan.example.WhiskyTracker.repositories.WhiskyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class WhiskyController {

    @Autowired
    WhiskyRepository whiskyRepository;

    @GetMapping (value = "/whiskies")
    public ResponseEntity<List<Whisky>> getAllWhiskies(@RequestParam(required = false) Optional<Integer> year, Optional<Integer> age, Optional<String> name, Optional<String> region) {
        if (year.isPresent()) {
            return new ResponseEntity<>(whiskyRepository.findByYear(year.get()),HttpStatus.OK);
        } else if (age.isPresent() && name.isPresent()) {
            return new ResponseEntity<>(whiskyRepository.findByAgeAndDistilleryName(age.get(),name.get()),HttpStatus.OK);
        } else if (region.isPresent()) {
            return new ResponseEntity<>(whiskyRepository.findByDistilleryRegion(region.get()),HttpStatus.OK);
        }
        return new ResponseEntity<>(whiskyRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping (value= "/whiskies/{id}")
    public ResponseEntity getWhiskey(@PathVariable Long id) {
        return new ResponseEntity<>(whiskyRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping (value= "/whiskies")
    public ResponseEntity<Whisky> postWhiskey(@RequestBody Whisky whisky) {
        whiskyRepository.save(whisky);
        return new ResponseEntity<>(whisky, HttpStatus.CREATED);
    }

}
