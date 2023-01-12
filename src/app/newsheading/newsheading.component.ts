import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-newsheading',
  templateUrl: './newsheading.component.html',
  styleUrls: ['./newsheading.component.css']
})
export class NewsheadingComponent {

  constructor(private _services:NewsapiservicesService){}

  //display data
newsheadingDisplay:any=[];

ngOnInit():void{

  this._services.newsheading().subscribe((result)=>{
    console.log(result);
    this.newsheadingDisplay=result.articles;
    
  })
}


}
