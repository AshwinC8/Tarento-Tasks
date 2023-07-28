package com.example.EmpMngmt.controller;

import com.example.EmpMngmt.dto.Note;
import com.example.EmpMngmt.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

    @PostMapping("/addNote")
    public Note addNote(@RequestBody Note noteObject){
        return noteService.addNote(noteObject);
    }

    @GetMapping("/getNote/{noteId}")
    public ResponseEntity<Note> getNote(@PathVariable int noteId){
        Optional<Note> optionalNote = noteService.getNote(noteId);
        if (optionalNote.isPresent()) {
            Note noteTemp = optionalNote.get();
            return ResponseEntity.ok(noteTemp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAllNote")
    public List<Note> getNotes(){
        return noteService.getAllNote();
    }

    @DeleteMapping("/deleteNote/{noteId}")
    public void deleteNote(@PathVariable int noteId) {
        noteService.deleteNote(noteId);
    }

    @PutMapping("/updateNote/{noteId}")
    public ResponseEntity<Note> updateNote(
            @PathVariable int noteId,
            @RequestBody Note updatedNote
    ) {
        Optional<Note> optionalNote = noteService.getNote(noteId);
        if (optionalNote != null) {
            Note noteTemp = optionalNote.get();
            noteTemp.setNote(updatedNote.getNote());
            noteService.updateNote(noteTemp);
            return ResponseEntity.ok(noteTemp);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
