import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() EventEmitter=new EventEmitter<string>();

send(value)
{
  this.EventEmitter.emit(value);
}

}
