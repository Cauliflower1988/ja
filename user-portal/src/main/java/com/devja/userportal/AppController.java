package com.devja.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
 

@Controller
public class AppController {
	@RequestMapping({"/"})
	public String loadUI() {

		return "forward:/ui/index.html";
	}
  
}