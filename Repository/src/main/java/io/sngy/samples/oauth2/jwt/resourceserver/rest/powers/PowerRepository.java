package io.sngy.samples.oauth2.jwt.resourceserver.rest.powers;

import io.sngy.samples.oauth2.jwt.resourceserver.domain.Power;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PowerRepository extends PagingAndSortingRepository<Power, Long>, JpaSpecificationExecutor<Power> {
}
