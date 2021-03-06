import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    {name: "São Paulo", State: "SP"}, 
    {name: "Vitória", State: "ES"}, 
    {name: "Ipatinga", State: "MG"}, 
    {name: "Vila Velha", State: "ES"}, 
  ]  

  clients = [] as any;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log("Salvando...");
    this.clients.push(
      { 
        name : this.name,
        address : this.address,
        city : this.city,
        age : this.age,
        phone : this.phone
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "";
    this.address = "";
    this.city = "";
    this.age = 0;
    this.phone = "";
  }  

  delete(i: number) {
    this.clients.splice(i,1);
  }

}
