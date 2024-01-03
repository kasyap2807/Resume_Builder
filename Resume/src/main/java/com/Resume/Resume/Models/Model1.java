package com.Resume.Resume.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ResumeLogin")
public class Model1 {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String firstname;
    @Column(name = "emailId",unique = true)
    private String emailId;
    @Column(name = "Password")
    private String password;

    // Constructor
    public Model1(long id, String firstname, String emailId, String password) {
        this.id = id;
        this.firstname = firstname;
        this.emailId = emailId;
        this.password = password;
    }

    // Empty COns
    public Model1() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and Setter
    


    

     

}
