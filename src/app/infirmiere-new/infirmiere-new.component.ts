import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Infirmiere } from '../shared/model/infirmiere';
import { InfirmiereService } from '../shared/service/infirmiere.service';

@Component({
  selector: 'app-infirmiere-new',
  templateUrl: './infirmiere-new.component.html',
  styleUrls: ['./infirmiere-new.component.css'],
})
export class InfirmiereNewComponent implements OnInit {
  infirmiereForm: FormGroup;

  constructor(private fb: FormBuilder, private infirmiereService: InfirmiereService) {
    this.infirmiereForm = this.fb.group({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      prenom: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      numeroProfessionnel: this.fb.control('', [
        Validators.required,
      ]),
      telPro: this.fb.control('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15),
      ]),
      telPerso: this.fb.control('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15),
      ]),
      adresse: new FormGroup({
        numero: new FormControl(),
        rue: new FormControl(),
        cp: new FormControl(),
        ville: new FormControl(),
      }),
    });
  }

  ngOnInit(): void {}

  createInfirmiere(): void {
    console.log(this.infirmiereForm.value.adresse);
    // if (this.infirmiereForm.status === 'VALID') {
    //   this.infirmiereForm.value.adresse;
    //   this.infirmiereService
    //     .postInfirmiere(this.infirmiereForm.value)
    //     .subscribe((newInfirmiere: Infirmiere) => {
    //       console.log(newInfirmiere);
    //       this.infirmiereForm.reset();
    //     });
    // }
  }
}
