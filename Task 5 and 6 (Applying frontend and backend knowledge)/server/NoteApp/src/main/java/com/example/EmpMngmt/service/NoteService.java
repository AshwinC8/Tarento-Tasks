package com.example.EmpMngmt.service;

import com.example.EmpMngmt.dto.Note;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface NoteService {

    public Note addNote(Note noteObject);

    public Optional<Note> getNote(int noteId);

    public void deleteNote(int noteId);

    public void updateNote(Note noteObject);

    public List<Note> getAllNote();
}
