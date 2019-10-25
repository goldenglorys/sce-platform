import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapServiceService } from '../map-service.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  control = new FormControl();
  filteredStreets: Observable<string[]>;
   @ViewChild('map') mapElement: any;
   map: google.maps.Map;
  

  public valToSearch = {
    status: null,
    category: null
  }
  

  res: any;
  rese: any;
  resp: any;
  resl: any;
  resn: any;
  resb: any;
  resa: any ;
  resh: any;
  reseh: any;
  resph: any;
  reslh: any;
  resnh: any;
  resbh: any;
  resah: any ;
  resc: any;
  resec: any;
  respc: any;
  reslc: any;
  resnc: any;
  resbc: any;
  resac: any ;
  actname1: any;
  actname2: any;
  actname3: any;
  actname4: any;
  actname5: any;
  actname: any;

  title: any;
  searchdata: any;
  searchs:any;
  id: any;
  id1: any;
  id2: any;
  id3: any;
  id4: any;
  id5: any;
  constructor(private Jarwis: JarwisService,private router: Router,private mapserver: MapServiceService) { }


  public lat;
  data: any;
  newArr = [];

  ngOnInit() {
    this.Jarwis.getalltitle().subscribe(data=>{
      let y:any = data;
      for(let x=0; x<y.length; x++){
        let z = data[x].name_title;
        let w = data[x].location;
        if(!this.newArr.includes(z) || !this.newArr.includes(w)){
          this.newArr.push(z);
          this.newArr.push(w);
        };

        // console.log(this.newArr)
      }
      })
      //map Init
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 6.9075, lng: 3.5813 },
        zoom: 10,
        panControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        // overviewMapControl: true,
        rotateControl: true,
        //mapTypeId: google.maps.mapTypeId.ROADMAP
      })

      this.Jarwis.displayevent().subscribe(
        data=>{
          // All data which contain category and subcat
        this.rese = data;  
        //this is one category which is event
        this.reseh=this.rese.event[0]
        this.actname=this.reseh.actname
        this.id=this.reseh.id
        //this is all subcat under event category
        this.resec=this.rese.subevent
        //  console.log(this.resec)
        
        }
      )

      this.Jarwis.displayartifact().subscribe(
        data=>{
        this.resa = data;  
        this.resah=this.resa.event[0]
        this.actname1=this.resah.actname
        this.id1=this.resah.id
        this.resac=this.resa.arti_cat
        //  console.log(this.resa)

        
        }
      )
      this.Jarwis.displaybusiness().subscribe(
        data=>{
        this.resb = data; 
        this.resbh=this.resb.event[0]
        this.actname2=this.resbh.actname
        this.id2=this.resbh.id
        this.resbc=this.resb.subevent 
        // console.log(this.resb)

        
        }
      )
      this.Jarwis.displaylocation().subscribe(
        data=>{
        this.resl = data;  
        this.reslh=this.resb.event[0]
        this.actname3=this.reslh.actname
        this.id3=this.reslh.id
        this.reslc=this.resl.subevent 
      //  console.log(this.reslc)
        
        }
      )
      this.Jarwis.displaynews().subscribe(
        data=>{
        this.resn= data;  
        this.resnh=this.resn.event[0]
        this.actname4=this.resnh.actname
        this.id4=this.resnh.id
        this.resnc=this.resn.subevent 
        // console.log(this.resn)
        
        }
      )
      this.Jarwis.displaypeople().subscribe(
        data=>{
        this.resp = data;  
        this.resph=this.resp.event[0]
        this.actname5=this.resph.actname
        this.id5=this.resph.id
        this.respc=this.resp.subevent 
         console.log(this.respc)
        
        }
      )
      this.Jarwis.getalltitle().subscribe(
        data=>{
        this.title = data;  
        
        // console.log(this.title)
        
        }
      )
      // this.search='iw'
      // this.Jarwis.search(this.search).subscribe(
      //   data=>{
      //   this.searchdata= data;  
        
      //   console.log(this.searchdata)
        
      //   }
      // )

      this.filteredStreets = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
        
      );
      
  }

  

  cat(event: any) {
    this.valToSearch.category = event.target.value;
    alert(this.valToSearch.category)
  }

  public search(): void {
   
    console.log(this.valToSearch);
    this.mapserver.getLocality(this.valToSearch.status).subscribe(data=>{
      if(this.data.results[0].address_components[1].short_name=='OG'){
        let lat = this.data.results[0].geometry.location.lat;
        let long = this.data.results[0].geometry.location.lng;
       
          this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: long },
          zoom: 10,
          panControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          // overviewMapControl: true,
          rotateControl: true,
          //mapTypeId: google.maps.mapTypeId.ROADMAP
        })

      }
      else {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 6.9075, lng: 3.5813 },
          zoom: 10,
          panControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          // overviewMapControl: true,
          rotateControl: true,
          //mapTypeId: google.maps.mapTypeId.ROADMAP
        })
  
      }
    })
  }


  streets: string[] = this.newArr ;
  private _filter(value: string): string[] {
    console.log(this.newArr)
    
    console.log(Array.isArray(this.streets));
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  navigat(id){
    // console.log(id)
   this.router.navigate(['Category/'+id+''])
  }
  navigate(id){
    this.router.navigate(['Content/'+id+''])
  }
}
