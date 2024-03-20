import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsLowerSectionComponent } from './product-details-lower-section.component';

describe('ProductDetailsLowerSectionComponent', () => {
  let component: ProductDetailsLowerSectionComponent;
  let fixture: ComponentFixture<ProductDetailsLowerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsLowerSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsLowerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
