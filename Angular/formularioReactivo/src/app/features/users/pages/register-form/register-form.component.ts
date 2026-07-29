import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  form: FormGroup;
  resumenRegistro: any = null;


  constructor(private fb: FormBuilder){
    this.form = this.fb.group({

      name :["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      nameUser: ["", [Validators.pattern(/^[a-zA-Z0-0_]+$/)]],
      passoword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassoword: ["", [Validators.required, this.validatorsPersonality()]],
      age: [null, [Validators.required, Validators.min(15)]],
      termsAndConditions: [false,[Validators.requiredTrue]]
    })
  }

  isValid(controlName: string, errorCode: string): boolean{
    const control = this.form.get(controlName);

    if(!control){
      return true;
    }

    const error = control.hasError(errorCode);
    const touched = control.touched;

    return error&&touched;
  }

  validatorsPersonality():ValidatorFn {

    return (forms: AbstractControl): ValidationErrors | null=>{

      const password = forms.parent?.get('passoword')?.value;
      const contraConfirma = forms.parent?.get('confirmPassoword')?.value

      // const wiii = this.form.get('confirmPassoword')?.value;

      if(password===contraConfirma){
        return null;
      }

      return {
            passwordsDiferentes: true
        };

    }
  }

  onClick(){

    const wii = this.form.valid;

    if (this.form.valid){
      console.log("Funciona");
      console.log(this.form.value);
      this.resumenRegistro = {
      nombre: this.form.value.name,
      correo: this.form.value.email,
      usuario: this.form.value.nameUser,
      edad: this.form.value.age,
      aceptaTerminos: this.form.value.termsAndConditions
    };
    }else{
      console.log(this.form.get('name')?.hasError('required'));
      console.log(this.form.get('name')?.hasError('minlength'));
      console.log("nope");
    }
  }
}
