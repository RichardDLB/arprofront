export class Mproyectos {

    idProyecto?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    img1Proyecto: string;
    img2Proyecto: string;
    img3Proyecto: string;

    constructor(nombreProyecto: string, descripcionProyecto: string, img1Proyecto: string, img2Proyecto: string, img3Proyecto: string,) {
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.img1Proyecto = img1Proyecto;
        this.img2Proyecto = img2Proyecto;
        this.img3Proyecto = img3Proyecto;
    }
}
