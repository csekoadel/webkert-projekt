import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArlistaComponent } from './arlista.component';

describe('ArlistaComponent', () => {
  let component: ArlistaComponent;
  let fixture: ComponentFixture<ArlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArlistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
