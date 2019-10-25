import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
 
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
 


  constructor(public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

 
 
  ngOnInit() {
  
  }

  
}
