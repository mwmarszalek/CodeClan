package com.example.codeclan.pirateservice.repository;

import com.example.codeclan.pirateservice.models.Pirate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PirateRepository extends JpaRepository<Pirate, Long> {

    List<Pirate> findByRaidsId(long id);

    List<Pirate> findByRaidsLocation(String location);
    long countByAgeGreaterThan(int age);
    List<Pirate> findByAgeGreaterThan(int age);
    List<Pirate> findByFirstName(String firstName);


}
