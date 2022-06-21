import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre:string = "IronMan";
    edad:number = 45;

    get nombreCap():string {
        return this.nombre.toUpperCase();
    }

    obtenerNommbre(): string {
        return `${ this.nombre } - ${this.edad}`;
    }

    cambiarNombre(): void {
        console.log("yes");
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void {
        this.edad = 20;
    }
}
