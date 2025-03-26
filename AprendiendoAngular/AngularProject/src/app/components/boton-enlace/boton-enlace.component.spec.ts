import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEnlaceComponent } from './boton-enlace.component';

describe('BotonEnlaceComponent', () => {
  let component: BotonEnlaceComponent;
  let fixture: ComponentFixture<BotonEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonEnlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
