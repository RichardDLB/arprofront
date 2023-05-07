import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mhabilidades } from 'src/app/model/mhabilidades';
import { ShabilidadesService } from 'src/app/service/shabilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habi: Mhabilidades = null as any;

  constructor(private shabilidades: ShabilidadesService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.shabilidades.detail(id).subscribe(
        data =>{
          this.habi = data;
        }, err =>{
          alert("Error al modificar habilidad");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.shabilidades.update(id, this.habi).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar habilidad");
           this.router.navigate(['']);
        }
      )
    }

}
