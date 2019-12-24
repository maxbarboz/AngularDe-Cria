import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valor: any = 0;

  soma(){
    this.valor = this.valor + 1;
  }

  diminui(){
    this.valor = this.valor - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
