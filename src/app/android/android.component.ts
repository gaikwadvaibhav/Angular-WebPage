import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class AndroidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
