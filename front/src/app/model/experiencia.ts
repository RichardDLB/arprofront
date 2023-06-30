export class Experiencia {
    idExperiencia? : number;
    nombreExperiencia : string;
    descripcionExperiencia : string;

    constructor(nombreExperiencia: string, descripcionExperiencia: string){
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
    }
}
