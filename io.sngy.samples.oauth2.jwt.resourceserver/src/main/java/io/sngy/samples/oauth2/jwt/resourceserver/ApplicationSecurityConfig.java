package io.sngy.samples.oauth2.jwt.resourceserver;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;


@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig {

    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf()
                .disable()
            .cors(cors-> cors
                .configurationSource(corsConfigurationSource)
            )
            .authorizeRequests(authorize -> authorize
                .antMatchers("/", "/index.html", "/css/*").permitAll()
                .anyRequest().authenticated()
            ).oauth2ResourceServer(
                OAuth2ResourceServerConfigurer::jwt
           );
        ;
        return http.build();
    }


}
