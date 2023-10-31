package io.sngy.samples.oauth2.jwt.resourceserver;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MemberRepository extends JpaRepository<MemberBoard, Long> {
}
