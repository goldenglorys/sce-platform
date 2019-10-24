import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../service/token.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  response: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    public actRoute: ActivatedRoute,
    private Token: TokenService
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      let id = params.get('id');
      
      this.Jarwis.gettitles(id).subscribe(data=>{
        this.response = data;
        console.log(this.response)
     
      })
    
        }));
  }
  navigates(id){
    this.router.navigate(['Category/'+id+''])
  }
}
