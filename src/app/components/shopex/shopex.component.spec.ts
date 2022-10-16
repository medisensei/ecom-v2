import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopexComponent } from './shopex.component';

describe('ShopexComponent', () => {
  let component: ShopexComponent;
  let fixture: ComponentFixture<ShopexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
