import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mpersona } from 'src/app/model/mpersona';
import { SPersonaService } from 'src/app/service/persona';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  per: Mpersona = null as any;

  constructor(private sPersona: SPersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.detail(id).subscribe(
        data =>{
          this.per = data;
        }, err =>{
          alert("Error al modificar habilidad");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.update(id, this.per).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar habilidad");
           this.router.navigate(['']);
        }
      )
    }

}
