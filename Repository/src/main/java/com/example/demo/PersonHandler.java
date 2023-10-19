package com.example.demo;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
@RepositoryEventHandler
public class PersonHandler {


    @HandleBeforeCreate // 생성일 넣기
    public void handleBeforeCreate(Person entity) {
        entity.setCreated(LocalDateTime.now());
    }

    @HandleBeforeSave // 수정일 넣기
    public void handleBeforeSave(Person entity) {
        entity.setUpdated(LocalDateTime.now());
    }

    @HandleBeforeCreate // 생성 후 제목 앞 작성자 붙이기
    public void CreateTitle(Person entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

    @HandleBeforeSave // 수정 후 제목 앞 작성자 붙이기
    public void SaveTitle(Person entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

}
