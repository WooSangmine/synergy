package io.sngy.samples.oauth2.jwt.resourceserver.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;


@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditingEntity {

    @CreatedBy
    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "username", column = @Column(name = "inserted_username")),
            @AttributeOverride(name = "address", column = @Column(name = "inserted_address")),
            @AttributeOverride(name = "timestamp", column = @Column(name = "inserted_timestamp"))
    })
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Auditing inserted;


    @LastModifiedBy
    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "username", column = @Column(name = "updated_username")),
            @AttributeOverride(name = "address", column = @Column(name = "updated_address")),
            @AttributeOverride(name = "timestamp", column = @Column(name = "updated_timestamp"))
    })
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Auditing updated;

}
