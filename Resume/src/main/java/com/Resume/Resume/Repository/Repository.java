package com.Resume.Resume.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Resume.Resume.Models.Model1;
import com.Resume.Resume.Models.Model2;

public interface Repository extends JpaRepository<Model1,Long>{
    
    @Query(value = "SELECT COUNT(*) FROM resume_login WHERE email_id = :username AND password = :password", nativeQuery = true)
    long countByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    @Query(value = "SELECT * FROM resume_login WHERE email_id = :username AND password = :password", nativeQuery = true)
    List<Model1> GetId(@Param("username") String username, @Param("password") String password);

}
