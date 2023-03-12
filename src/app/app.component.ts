import { Component, OnInit } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child1Service } from './services/child1/child1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'learn';
  name: any;

  msg = "Hi child"
  nameCollector(event: any){
    this.name = event
  }

  constructor(private child1service: Child1Service){
    
  }

  ngOnInit(): void {
    // this.child1service.name_emitter.subscribe(val => {
    //   this.name = val
    // })
  }

  send(tagname: any){
    this.msg = tagname
  } 



}
