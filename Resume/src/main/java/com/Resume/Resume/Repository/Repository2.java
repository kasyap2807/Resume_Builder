package com.Resume.Resume.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Resume.Resume.Models.Model3;

public interface Repository2 extends JpaRepository<Model3,Long>{
    @Query(value = "SELECT * FROM data WHERE user_id = :id", nativeQuery = true)
    Model3 findJsonDataById(@Param("id") Long id);
}
