export class Persona {
    id?:number;
    nombre:String;
    apellido:String;
    profesion:String;
    imgBanner:String;
    imgPerfil:String;
    email:String;
    texPre:String;

    constructor(nombre:String, apellido:String, profesion:String, imgBanner:String, imgPerfil:String, email:String, texPre:String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
        this.imgBanner=imgBanner;
        this.imgPerfil=imgPerfil;
        this.email=email;
        this.texPre=texPre;
    }
}
