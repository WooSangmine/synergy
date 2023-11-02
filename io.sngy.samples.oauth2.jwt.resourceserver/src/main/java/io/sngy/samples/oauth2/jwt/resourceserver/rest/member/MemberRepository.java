package io.sngy.samples.oauth2.jwt.resourceserver.rest.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MemberRepository extends JpaRepository<MemberBoard, Long> {
}
