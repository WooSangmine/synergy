package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   //아이디
    private String title;   //제목
    @Column( updatable=false)
    private LocalDateTime created; //생성일
    private LocalDateTime updated;   //수정일'
    @Column( updatable=false)
    private String name;    //작성자
    private String subtitle;    //부제목(설명)
    private String content; //내용
}
