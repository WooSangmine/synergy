package com.example.demo;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
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
    public void CreateTitle(Person entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

    @HandleBeforeSave
    public void SaveTitle(Person entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

}
