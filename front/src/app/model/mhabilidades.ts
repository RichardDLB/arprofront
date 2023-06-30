export class Mhabilidades {
    
    idHabilidad?: number;
    nombreHabilidad: string;
    porcentajeHabilidad: number;

    constructor(nombreHabilidad: string, porcentajeHabilidad: number) {
        this.nombreHabilidad = nombreHabilidad;
        this.porcentajeHabilidad = porcentajeHabilidad;
    }
}
