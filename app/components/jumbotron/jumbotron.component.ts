import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls:  ['jumbotron.component.css']
})
export class JumbotronComponent { 
  private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;
  constructor(){
    this.jbtHeading="My Simple Website";
    this.jbtText="This is an amazing website created with love from India";
    this.jbtBtnText="Click to Know More";
    this.jbtBtnUrl="http://angular.io";
  }

}