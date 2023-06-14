import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarContatosComponent } from './cadastar-contatos.component';

describe('CadastarContatosComponent', () => {
  let component: CadastarContatosComponent;
  let fixture: ComponentFixture<CadastarContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarContatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastarContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
