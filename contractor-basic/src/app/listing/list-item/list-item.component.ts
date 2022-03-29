import { Component, Input, OnInit } from '@angular/core';
import { Iasset } from '../Iasset.Interface';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() asset: Iasset = {
    id: 0,
    Name: '',
    Price: 0,
    SellRent: "",
    PType: "",
    FType: "",
    BHK: 0,
    BuiltArea: 0,
    City: "",
    RTM: 0,
    Contact: ""
  };
  @Input()
  hideIcons!: boolean;
  constructor() {
  }

  ngOnInit(): void {}
}
