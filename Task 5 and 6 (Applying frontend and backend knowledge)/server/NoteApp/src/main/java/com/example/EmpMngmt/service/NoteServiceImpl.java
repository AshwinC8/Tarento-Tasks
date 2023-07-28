package com.example.EmpMngmt.service;

import com.example.EmpMngmt.dao.NoteDao;
import com.example.EmpMngmt.dto.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteDao noteDao;

    @Override
    public Note addNote(Note noteObject) {
        return noteDao.save(noteObject);
    }

    @Override
    public Optional<Note> getNote(int noteId) {
        return noteDao.findById(noteId);
    }

    @Override
    public List<Note> getAllNote() {
        return noteDao.findAll();
    }

    @Override
    public void deleteNote(int noteId) {
        noteDao.deleteById(noteId);
    }

    @Override
    public void updateNote(Note noteObject) {
        noteDao.deleteById(noteObject.getNoteId());
        noteDao.save(noteObject);
    }
}
