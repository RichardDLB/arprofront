export class Mpersona {
    idPersona?:number;
    nombrePersona:string;
    apellidoPersona:string;
    profesionPersona:string;
    imgBannerPersona:string;
    imgPerfilPersona:string;
    emailPersona:string;
    texPrePersona:string;

    constructor(nombrePersona:string, apellidoPersona:string, profesionPersona:string, imgBannerPersona:string, imgPerfilPersona:string, emailPersona:string, texPrePersona:string){
        this.nombrePersona=nombrePersona;
        this.apellidoPersona=apellidoPersona;
        this.profesionPersona=profesionPersona;
        this.imgBannerPersona=imgBannerPersona;
        this.imgPerfilPersona=imgPerfilPersona;
        this.emailPersona=emailPersona;
        this.texPrePersona=texPrePersona;
    }
}
