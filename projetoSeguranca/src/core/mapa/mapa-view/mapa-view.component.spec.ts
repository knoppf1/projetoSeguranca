import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaViewComponent } from './mapa-view.component';

describe('MapaViewComponent', () => {
  let component: MapaViewComponent;
  let fixture: ComponentFixture<MapaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
