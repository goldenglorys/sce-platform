import { Component } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SC-Platform';
 
  public loggedIn: boolean;
// public alerts: Array<Alert>=[];

// message="";
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }
  public response:any;
  public res:any;
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.Jarwis.getact().subscribe(
      data=>{
      // console.log(data);
      this.res = data;  
      // this.roleid=this.res[0]
      console.log(this.res)
      }
    )

  }
  

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }
  navigate(id){
    this.router.navigate(['Category/'+id+''])
  }

}
