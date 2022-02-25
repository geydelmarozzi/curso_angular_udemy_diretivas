import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  fieldname: string = "xxx";

  constructor() { }

  ngOnInit(): void {
  }

  teste() {
    console.log("Valor selecionado: " + this.fieldname);
  }

}
