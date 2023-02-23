package com.example.Files.And.Folders.components;


import com.example.Files.And.Folders.models.Files;
import com.example.Files.And.Folders.models.Folders;
import com.example.Files.And.Folders.repositories.FilesRepository;
import com.example.Files.And.Folders.repositories.FoldersRepository;
import com.example.Files.And.Folders.repositories.PersonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.io.File;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    private FilesRepository filesRepository;

    @Autowired
    private FoldersRepository foldersRepository;

    @Autowired
    private PersonsRepository personsRepository;



    @Override
    public void run(ApplicationArguments args) throws Exception {
        Folders folder1 = new Folders("lol",)
        Files file1 = new Files("something1","exe",200,)
    }
}
