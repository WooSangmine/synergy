package com.example.demo;

import org.springframework.data.rest.core.annotation.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RepositoryEventHandler
public class PersonHandler {

    // 저장 하기 전 DB에 넣을 때,
    @HandleBeforeCreate
    public void handleBeforeCreate(Person entity) {
        entity.setCreated(LocalDateTime.now());
    }

    @HandleBeforeSave // PUT, PATCH
    public void handleBeforeSave(Person entity) {
        entity.setUpdated(LocalDateTime.now());
    }

    @HandleBeforeCreate
    public void name(Person entity) {
        entity.setName("***");
    }

}
