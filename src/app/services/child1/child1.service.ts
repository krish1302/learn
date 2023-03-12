import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Child1Service {

  @Output() name_emitter = new EventEmitter();
  constructor() { }

  setName(name:any){
    this.name_emitter.emit(name)
  }
  
}
