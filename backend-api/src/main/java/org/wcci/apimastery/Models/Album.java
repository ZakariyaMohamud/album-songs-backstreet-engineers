package org.wcci.apimastery.Models;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
@Entity
public class Album {
    @Id @GeneratedValue
    private long id;
    private String title;
    @OneToMany(mappedBy="album")
    private Collection<Song> songs;
    private String artist;
    private String duration;
    private String imageUrl;
    private double avgRating;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;

    public Album(String title, String artist, String duration, String imageUrl, String recordLabel) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.imageUrl = imageUrl;
        this.recordLabel = recordLabel;
    }
    public Album() {
    }

    public long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public Collection<Song> getSongs() {
        return songs;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public double getAvgRating() {
        return avgRating;
    }
    public String getRecordLabel() {
        return recordLabel;
    }
    public Collection<String> getComments() {
        return comments;
    }
    public String getArtist() {
        return artist;
    }
    public String getDuration(){
        return duration;
    }


    public void changeTitle(String newTitle){
        title = newTitle;
    }

    public void addSongToAlbum(Song songToAdd){
        songs.add(songToAdd);
    }
    public void addComments(String newComment){
        comments.add(newComment);
    }

    public void avgRating() {
        double sum = 0;
        for (Song song: songs) {
            sum += song.avgRating();
        }
        avgRating = sum / songs.size();
    }
}
