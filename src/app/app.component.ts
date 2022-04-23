import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Contact} from './entities/Contact';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent implements OnInit { 
  title = 'project_contacts';
   
  contacts: Contact[]=[];
     
  constructor(private httpService: HttpService){}
      
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.contacts=data.contactList);
  }
}