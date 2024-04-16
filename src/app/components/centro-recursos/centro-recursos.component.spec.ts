import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroRecursosComponent } from './centro-recursos.component';

describe('CentroRecursosComponent', () => {
  let component: CentroRecursosComponent;
  let fixture: ComponentFixture<CentroRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentroRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
