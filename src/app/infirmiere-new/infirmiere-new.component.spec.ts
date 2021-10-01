import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereNewComponent } from './infirmiere-new.component';

describe('InfirmiereNewComponent', () => {
  let component: InfirmiereNewComponent;
  let fixture: ComponentFixture<InfirmiereNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
