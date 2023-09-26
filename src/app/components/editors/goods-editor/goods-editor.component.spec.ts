import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsEditorComponent } from './goods-editor.component';

describe('GoodsEditorComponent', () => {
  let component: GoodsEditorComponent;
  let fixture: ComponentFixture<GoodsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodsEditorComponent]
    });
    fixture = TestBed.createComponent(GoodsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
