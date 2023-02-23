package com.example.Files.And.Folders.repositories;

import com.example.Files.And.Folders.models.Files;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilesRepository extends JpaRepository<Files,Long> {
}
