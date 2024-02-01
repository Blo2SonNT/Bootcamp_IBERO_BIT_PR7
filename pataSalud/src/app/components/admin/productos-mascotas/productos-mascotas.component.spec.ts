import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMascotasComponent } from './productos-mascotas.component';

describe('ProductosMascotasComponent', () => {
  let component: ProductosMascotasComponent;
  let fixture: ComponentFixture<ProductosMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosMascotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
