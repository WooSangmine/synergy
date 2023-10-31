package io.syng.sample.oauth2.jwt.resourceserver.domain;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;


@Component
public class AuditingTokenContext {

    public Authentication getCurrentAuthentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public HttpServletRequest getCurrentHttpServletRequest() {
        RequestAttributes attrs = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes request = (ServletRequestAttributes)attrs;
        return request.getRequest();
    }
    public JwtAuthenticationToken getCurrentAuthenticationToken() {

        //UsernamePasswordAuthenticationToken g;
        return (JwtAuthenticationToken)getCurrentAuthentication();
    }

    public Jwt getCurrentToken() {
        return getCurrentAuthenticationToken().getToken();
    }

    public AuditingToken getCurrentAuthenticationContext() {
        return new AuditingToken(getCurrentToken());
    }
}