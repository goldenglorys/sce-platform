import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
 
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
 
  response: any;
  cat: any;
  actname: any;
  title: any;

  constructor(
              private Auth: AuthService,
              private router: Router,
              private Jarwis: JarwisService,
              public actRoute: ActivatedRoute,
              private Token: TokenService,
              public snackBar: MatSnackBar, 
              private formBuilder: FormBuilder) { }

 
 
  ngOnInit() {

    this.Jarwis.gettitles('4').subscribe(data=>{
      this.response = data;
      this.actname=this.response.acti[0].actname
      this.title=this.response.title
      this.cat=this.response.cat
      // this.id4=this.resnh.id
      console.log(this.title)
      console.log(this.response)
   
    })
  
  }

  
}
