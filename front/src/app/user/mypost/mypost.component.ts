import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
 
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  // dynamicArray: Array<DynamicGrid> = [];  
  // newDynamic: any = {};  


  constructor(public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

 
 
  ngOnInit() {
  
  }

  
}
// this.newDynamic = {title1: "", title2: "",title3:""};  
// this​.dynamicArray.push(​this​.newDynamic);  
// console.log(this.dynamicArray)