import { Component, Input, OnInit } from '@angular/core';
import { Iasset } from '../Iasset.Interface';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() asset: Iasset | undefined;
  @Input()
  hideIcons!: boolean;
  id : number = 1;
  constructor() {
  }

  ngOnInit(): void {
  }
}
