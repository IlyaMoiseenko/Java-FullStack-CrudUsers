package com.markalfox.web.repository;

import com.markalfox.web.model.Human;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HumanRepository extends JpaRepository<Human, Long> {

}
