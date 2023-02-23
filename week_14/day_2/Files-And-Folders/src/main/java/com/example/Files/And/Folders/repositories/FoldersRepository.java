package com.example.Files.And.Folders.repositories;

import com.example.Files.And.Folders.models.Folders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoldersRepository extends JpaRepository<Folders,Long> {
}
