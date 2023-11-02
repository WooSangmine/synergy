package io.sngy.samples.oauth2.jwt.resourceserver.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "power")
@Data
public class Power extends AuditingEntity {
    @Id @GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "value")
    private Integer value;
    @Version
    @Column(name = "version")
    private Long version;
}
