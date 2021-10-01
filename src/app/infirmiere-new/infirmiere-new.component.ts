import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Adresse } from '../shared/model/adresse';
import { Infirmiere } from '../shared/model/infirmiere';
import { AdresseService } from '../shared/service/adresse.service';
import { InfirmiereService } from '../shared/service/infirmiere.service';

@Component({
  selector: 'app-infirmiere-new',
  templateUrl: './infirmiere-new.component.html',
  styleUrls: ['./infirmiere-new.component.css'],
})
export class InfirmiereNewComponent implements OnInit {
  infirmiereForm: FormGroup;

  constructor(private fb: FormBuilder, private infirmiereService: InfirmiereService, private adresseService: AdresseService) {
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
        Validators.minLength(8),
        Validators.maxLength(15),
      ]),
      telPerso: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
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
    if (this.infirmiereForm.status === 'VALID') {
      this.adresseService
        .postAdresse(this.infirmiereForm.value.adresse)
        .subscribe((newAdresse: Adresse) => {
          this.infirmiereForm.value.adresse = newAdresse;
          this.infirmiereService
            .postInfirmiere(this.infirmiereForm.value)
            .subscribe((newInfirmiere: Infirmiere) => {
              this.infirmiereForm.reset();
            });
        });
    }
  }
}
