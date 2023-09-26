import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsPageCardsComponent } from './goods-page-cards.component';

describe('GoodsPageCardsComponent', () => {
  let component: GoodsPageCardsComponent;
  let fixture: ComponentFixture<GoodsPageCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsPageCardsComponent]
    });
    fixture = TestBed.createComponent(GoodsPageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
