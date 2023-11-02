# io.sngy.samples.oauth2.jwt.resourceserver

## Get Started
Oauth2 Authorization Server 를 통해 발행한 토큰을 사용하여 인가처리를 하는 리소스 서버 프로젝트이다.

### Gradle
- STEP1: io.sngy.samples.oauth2.authorizationserver 프로젝트를 실행시킨다.

- STEP2: io.sngy.samples.oauth2.jwt.authorizationserver 프로젝트를 실행시킨다.

- STEP3: `src/main/java/io.sngy.samples.oauth2.jwt.resourceserver/Application`에서 애플리케이션을 실행한다.

## Stacks

```shell
implementation 'org.springframework.boot:spring-boot-starter:2.7.15'
implementation 'org.springframework.boot:spring-boot-starter-security:2.7.15'
implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server:2.7.15'
implementation 'org.springframework.boot:spring-boot-starter-data-rest:2.7.15'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa:2.7.15'
implementation 'io.sngy:com.sngy.data.rest:v20230921'
implementation 'io.sngy:com.sngy.data.jpa:v20230921'
implementation 'org.hsqldb:hsqldb:2.7.2'
compileOnly 'org.projectlombok:lombok:1.18.28'
annotationProcessor 'org.projectlombok:lombok:1.18.28'
asciidoctorExtensions 'org.springframework.restdocs:spring-restdocs-asciidoctor:3.0.0'
testImplementation 'org.springframework.restdocs:spring-restdocs-mockmvc'
testImplementation 'org.springframework.boot:spring-boot-starter-test'
testImplementation 'org.springframework.security:spring-security-test'
```

## Authors
- [kslee@sngy.io](mailto:kslee@sngy.io)
- [zzan@sngy.io](mailto:zzan@sngy.io)
- [sky@sngy.io](mailto:sky@sngy.io)