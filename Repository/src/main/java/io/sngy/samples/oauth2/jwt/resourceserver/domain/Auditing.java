package io.sngy.samples.oauth2.jwt.resourceserver.domain;


import lombok.Data;

import javax.persistence.Embeddable;

@Embeddable
public @Data class Auditing {

    private String username;
    private String address;
    private Long timestamp;
}
