import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Infirmiere } from '../shared/model/infirmiere';
import { InfirmiereService } from '../shared/service/infirmiere.service';

@Component({
  selector: 'app-infirmiere-list',
  templateUrl: './infirmiere-list.component.html',
  styleUrls: ['./infirmiere-list.component.css']
})
export class InfirmiereListComponent implements OnInit, OnDestroy {

  infirmieres: Infirmiere[] = [];
  infirmieresSub?: Subscription;

  constructor(private infirmiereService: InfirmiereService) { }

  ngOnInit(): void {
    this.infirmieresSub = this.infirmiereService.infirmieresObs.subscribe(
      (infirmieres: Infirmiere[]) => {
        this.infirmieres = infirmieres;
      }
    );
    this.getInfirmieres();
  }

  ngOnDestroy(): void {
    if (this.infirmieresSub) {
      this.infirmieresSub.unsubscribe();
    }
  }

  getInfirmieres() {
    this.infirmiereService.refreshInfirmieres();
  }

  deleteInfirmiere(id: number) {
    this.infirmiereService.delInfirmiere(id).subscribe((resp) => {
      this.infirmiereService.refreshInfirmieres();
    });
  }

  updateInfirmiere() {

  }

}
