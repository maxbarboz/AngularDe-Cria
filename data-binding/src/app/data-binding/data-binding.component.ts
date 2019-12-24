import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://maxsuel.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/sports/";

  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
