import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Child1Service } from 'src/app/services/child1/child1.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  @Input() msg: any
  @Output() name_emitter= new EventEmitter();
  constructor(private child1service: Child1Service){

  }
  
  
  send(tagname: any){
    this.name_emitter.emit(tagname)
  }
}
