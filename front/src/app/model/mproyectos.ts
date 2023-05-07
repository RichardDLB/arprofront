export class Mproyectos {

    id?: number;
    nombre: string;
    descripcion: string;
    img1: string;
    img2: string;
    img3: string;

    constructor(nombre: string, descripcion: string, img1: string, img2: string, img3: string,) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
    }
}
