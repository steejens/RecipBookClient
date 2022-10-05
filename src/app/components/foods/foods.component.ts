import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  @Input() foodList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
