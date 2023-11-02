package io.sngy.samples.oauth2.jwt.resourceserver.rest.member;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;


@Component
@RepositoryEventHandler
public class MemberHandler {


    @HandleBeforeCreate // 생성일 넣기
    public void handleBeforeCreate(MemberBoard entity) {
        entity.setCreated(LocalDateTime.now());
    }

    @HandleBeforeSave // 수정일 넣기
    public void handleBeforeSave(MemberBoard entity) {
        entity.setUpdated(LocalDateTime.now());
    }

    @HandleBeforeCreate // 생성 후 제목 앞 작성자 붙이기
    public void CreateTitle(MemberBoard entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

    @HandleBeforeSave // 수정 후 제목 앞 작성자 붙이기'
    public void SaveTitle(MemberBoard entity) {
        entity.setTitle("["+entity.getName()+"]"+entity.getTitle());
    }

}
