import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string [] = ['Spinderman','IronMan','Thor','Hulk'];
  heroeborrado:string = "";
  bheroeborrado:boolean=false;

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  borrarHeroes():void {
    // this.heroes =['Spinderman','Awk'];
    // this.heroes.unshift    
    this.heroeborrado  = this.heroes.shift() || "" ;
    this.bheroeborrado=true;
  }

}
