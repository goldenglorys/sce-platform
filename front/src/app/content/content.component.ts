import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  res: any;
  response: any;
  contents: any;
  actname: any;
  catname: any;
  image: any;
  name: any;
  title:any;
  dates:any;
  about:any;

  constructor(private Jarwis: JarwisService,private router: Router,public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params => {
      //console.log(this.shop_id)
    let id = params.get('id');
    // console.log(id)
    this.Jarwis.getcontent(id).subscribe(data=>{
      this.response = data;
      console.log(this.response)
       this.res=this.response.name[0];
       this.actname=this.res.actname;
       this.title=this.res.name_title;
       this.about=this.res.about;
       this.dates=this.res.created_at;
       this.catname=this.res.catname;
       this.name=this.res.firstname+""+this.res.lastname+" "+this.res.middlename
       console.log(this.res)
       this.contents=this.response.content
       console.log(this.contents)
      
     this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
   //console.log(this.sdet);
    })
  //   this.Jarwis.productdetail1(id).subscribe(data=>{
  //     this.response1 = data;
      
  //   })
  //   this.Jarwis.productdetail2(id).subscribe(data=>{
  //     this.response2 = data;
     
  //   })
     
      }));
   
   
  }
  navigate(id){
    this.router.navigate(['Content/'+id+''])
  }
}
