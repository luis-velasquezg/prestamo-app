import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDispositivosComponent } from './registro-dispositivos.component';

describe('RegistroDispositivosComponent', () => {
  let component: RegistroDispositivosComponent;
  let fixture: ComponentFixture<RegistroDispositivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDispositivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
