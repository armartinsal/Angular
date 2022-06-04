import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seasons: string[] = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  idEditar: number = -1;

  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['', [Validators.required, Validators.min(0), Validators.max(125)]],
    DNI: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
    cumpleanos: ['', [Validators.required]],
    colorFavorito: ['', [Validators.required, Validators.minLength(3)]],
    sexo: ['', [Validators.required]],
  });

  personaArray: Persona[] = []

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  registrar(): void {
    if (this.formulario.status != 'INVALID') {
      if(this.idEditar == -1){
        this.personaArray.push(
          new Persona(
            this.formulario.value.nombre,
            this.formulario.value.apellidos,
            this.formulario.value.edad,
            this.formulario.value.DNI,
            new Date(this.formulario.value.cumpleanos),
            this.formulario.value.colorFavorito,
            this.formulario.value.sexo
          ))
        }
      else{
        this.personaArray[this.idEditar].setNombre(this.formulario.value.nombre);
        this.personaArray[this.idEditar].setApellidos(this.formulario.value.apellidos);
        this.personaArray[this.idEditar].setEdad(this.formulario.value.edad);
        this.personaArray[this.idEditar].setDNI(this.formulario.value.DNI);
        this.personaArray[this.idEditar].setCumpleanos(this.formulario.value.cumpleanos);
        this.personaArray[this.idEditar].setColorFavorito(this.formulario.value.colorFavorito);
        this.personaArray[this.idEditar].setSexo(this.formulario.value.sexo);


        this.idEditar = -1;
      }
      
      this.formulario.reset()
    }
  }

  eliminar(i: number): void {
    this.personaArray.splice(i, 1)
  }

  modificar(i: number): void {
    this.idEditar = i;
    this.formulario.controls["nombre"].setValue(this.personaArray[i].getNombre());
    this.formulario.controls["apellidos"].setValue(this.personaArray[i].getApellidos());
    this.formulario.controls["edad"].setValue(this.personaArray[i].getEdad());
    this.formulario.controls["DNI"].setValue(this.personaArray[i].getDNI());
    this.formulario.controls["cumpleanos"].setValue(this.personaArray[i].getCumpleanos());
    this.formulario.controls["colorFavorito"].setValue(this.personaArray[i].getColorFavorito());
    this.formulario.controls["sexo"].setValue(this.personaArray[i].getSexo());
  }
}


