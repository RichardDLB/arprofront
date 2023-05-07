export class Mpersona {
    id?:number;
    nombre:string;
    apellido:string;
    profesion:string;
    imgBanner:string;
    imgPerfil:string;
    email:string;
    texPre:string;

    constructor(nombre:string, apellido:string, profesion:string, imgBanner:string, imgPerfil:string, email:string, texPre:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
        this.imgBanner=imgBanner;
        this.imgPerfil=imgPerfil;
        this.email=email;
        this.texPre=texPre;
    }
}
