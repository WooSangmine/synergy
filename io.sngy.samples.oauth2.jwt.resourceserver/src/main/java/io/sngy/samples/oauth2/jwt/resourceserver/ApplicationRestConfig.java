package io.sngy.samples.oauth2.jwt.resourceserver;

import io.sngy.samples.oauth2.jwt.resourceserver.domain.Power;
import io.sngy.samples.oauth2.jwt.resourceserver.rest.member.MemberBoard;
import io.sngy.samples.oauth2.jwt.resourceserver.rest.member.MemberHandler;
import io.sngy.samples.oauth2.jwt.resourceserver.rest.member.MemberRepository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class ApplicationRestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(MemberBoard.class, MemberRepository.class, MemberHandler.class, Power.class);
        config.setReturnBodyOnCreate(true);
        config.setReturnBodyOnUpdate(true);
    }
}
