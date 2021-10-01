import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereListComponent } from './infirmiere-list.component';

describe('InfirmiereListComponent', () => {
  let component: InfirmiereListComponent;
  let fixture: ComponentFixture<InfirmiereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
