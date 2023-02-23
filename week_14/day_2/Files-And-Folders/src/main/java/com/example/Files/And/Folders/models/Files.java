package com.example.Files.And.Folders.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="files")
public class Files {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="extension")
    private String extension;
    @Column(name="size")
    private int size;


    @ManyToOne
    @JoinColumn(name = "folder_id", nullable = true)
    @JsonIgnoreProperties({"files"})
    private Folders folders;


    public Files(String name, String extension, int size, Folders folders) {
        this.name = name;
        this.extension = extension;
        this.size = size;
        this.folders = folders;
    }

    public Files() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Folders getFolder() {
        return folders;
    }

    public void setFolder(Folders folders) {
        this.folders = folders;
    }
}
