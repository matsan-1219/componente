import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html5',
  templateUrl: './html5.component.html',
  styleUrls: ['./html5.component.css']
})
export class Html5Component implements OnInit {

  constructor() { 
    console.log("se ejecuto el constructor")
  }

  ngOnInit(): void {
    console.log("se ejecuto oninit")
  }

}
