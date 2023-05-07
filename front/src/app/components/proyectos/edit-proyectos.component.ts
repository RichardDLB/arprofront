import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mproyectos } from 'src/app/model/mproyectos';
import { SproyectosService } from 'src/app/service/sproyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyec: Mproyectos = null as any;

  constructor(private sproyectos: SproyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sproyectos.detail(id).subscribe(
        data =>{
          this.proyec = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sproyectos.update(id, this.proyec).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar proyecto");
           this.router.navigate(['']);
        }
      )
    }

}
