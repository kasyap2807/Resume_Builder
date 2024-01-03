package com.Resume.Resume.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Resume.Resume.Models.Model1;
import com.Resume.Resume.Models.Model2;
import com.Resume.Resume.Models.Model3;
import com.Resume.Resume.Repository.Repository;
import com.Resume.Resume.Repository.Repository2;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class Controller { 
    @Autowired
    private Repository Repository;
    @Autowired
    private Repository2 Repository2;
    // private 
    @PostMapping("/GetLogin")
    public String getLogin(@RequestBody Model2 Model){
        if(Repository.countByUsernameAndPassword(Model.getEmail(),Model.getPassword())==1){
            return "Success";
        }
        return "Fail";
    }

    @PostMapping("/GetId")
    public Model1 getId(@RequestBody Model2 Model){
    return Repository.GetId(Model.getEmail(),Model.getPassword()).get(0);
    }

    @PostMapping("/Register")
    public String SetRegister(@RequestBody Model1 Model){
        Repository.save(Model);
        return "Success";
    }

    @GetMapping("/GetData/{id}")
    public Model3 GetData(@PathVariable("id") long id){
        return Repository2.findJsonDataById(id);
    }

    @PostMapping("/SetData")
    public Model3 Setdata(@RequestBody Model3 Model){
        String str = Model.getJsonData();
        Model.setJsonData(str.replace("'", ""));
        return Repository2.save(Model);
    }



}


