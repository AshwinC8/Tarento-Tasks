package com.example.NotesApp.service;

import com.example.NotesApp.dto.Note;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface NoteService {

    public Note addNote(Note noteObject);

    public Optional<Note> getNote(int noteId);

    public void deleteNote(int noteId);

    public void updateNote(Note noteObject);
}
