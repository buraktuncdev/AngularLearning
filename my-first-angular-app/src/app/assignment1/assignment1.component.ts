import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  username = '';

  onCreateUser(){

    this.username = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
