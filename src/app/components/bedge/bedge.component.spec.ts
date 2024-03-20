import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedgeComponent } from './bedge.component';

describe('ProductListItemBedgeComponent', () => {
  let component: BedgeComponent;
  let fixture: ComponentFixture<BedgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
