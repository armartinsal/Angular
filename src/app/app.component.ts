import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  // favoriteSeason:string;
  seasons: string[] = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  pageSize = 10;


  checkoutForm = this.formBuilder.group({
    nombre: '',
  });
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    console.log(this.checkoutForm.value);
  }
}


