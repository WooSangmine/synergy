package io.sngy.samples.oauth2.jwt.resourceserver.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;

import java.util.Optional;


@Component
public class AuditingAuditor implements AuditorAware<Auditing> {

    @Autowired
    private AuditingTokenContext context;

    @Override
    public Optional<Auditing> getCurrentAuditor() {
        Auditing instance = new Auditing();
        instance.setUsername(context.getCurrentAuthentication().getName());
        instance.setTimestamp(System.currentTimeMillis());
        instance.setAddress(context.getCurrentHttpServletRequest().getRemoteAddr());
        return Optional.of(instance);
    }
}