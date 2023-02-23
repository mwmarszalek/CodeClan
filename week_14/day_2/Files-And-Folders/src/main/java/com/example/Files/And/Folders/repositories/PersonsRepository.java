package com.example.Files.And.Folders.repositories;

import com.example.Files.And.Folders.models.Persons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonsRepository extends JpaRepository<Persons,Long> {
}
