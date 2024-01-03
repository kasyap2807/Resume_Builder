package com.Resume.Resume.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Data")
public class Model3 {
    
    @Id
    @Column(name = "UserId")
    private long userid;

    @Column(columnDefinition = "Text") 
    private String jsonData;

    public Model3(long userid, String jsonData) {
        this.userid = userid;
        this.jsonData = jsonData;
    }

    

    public Model3() {
    }



   

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getJsonData() {
        return jsonData;
    }

    public void setJsonData(String jsonData) {
        this.jsonData = jsonData;
    }

    
    

    
}

