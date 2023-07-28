package com.example.Notes.App.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Note {

    @Id
    private int noteId;

    private String note;

    public Note(int noteId, String note) {
        this.noteId = noteId;
        this.note = note;
    }

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
