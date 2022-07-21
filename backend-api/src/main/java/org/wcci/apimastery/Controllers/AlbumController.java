package org.wcci.apimastery.Controllers;

import org.wcci.apimastery.Models.Album;
import org.wcci.apimastery.Repos.AlbumRepo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.wcci.apimastery.Repos.SongRepo;
import org.springframework.web.bind.annotation.*;

@RestController
public class AlbumController {

    private AlbumRepo albumRepo;
    private SongRepo songRepo;

    public AlbumController(AlbumRepo albumRepo, SongRepo songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/api/album")
    public Iterable<Album> retrieveAllAlbum() {
        return albumRepo.findAll();
    }

    @GetMapping("/api/album/{id}")
    public Album retrieveAlbumById(@PathVariable Long id) {
        return albumRepo.findById(id).get();
    }

    @PostMapping("/api/album")
    public Iterable<Album> addAlbum(@RequestBody Album albumToAdd){
        albumRepo.save(albumToAdd);
        return albumRepo.findAll();
    }

//    @DeleteMapping("/api/album/{id}")
//    public String deleteAlbumById(@PathVariable ("id") Long id) {
//        return "Delete by id called";
//    }

    @PatchMapping("/api/album/{id}/name")
    public Album albumChangeTitle(@RequestBody String newTitle,@PathVariable Long id){
        Album albumToChange = albumRepo.findById(id).get();
        albumToChange.changeTitle(newTitle);
        albumRepo.save(albumToChange);
        return albumToChange;
    }
    @PostMapping("/api/albums/{id}/avgRating")
    public Album albumAvgRating (@PathVariable Long id) {
        Album albumToAdd = albumRepo.findById(id).get();
        albumToAdd.avgRating();
        albumRepo.save(albumToAdd);
        return albumToAdd;
    }
}