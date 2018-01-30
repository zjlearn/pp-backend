import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-msgiconbtn',
  templateUrl: './msgiconbtn.component.html',
  styleUrls: ['./msgiconbtn.component.css']
})
export class MsgiconbtnComponent implements OnInit {

  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
