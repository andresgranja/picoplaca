import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoplacaComponent } from './picoplaca.component';

describe('PicoplacaComponent', () => {
  let component: PicoplacaComponent;
  let fixture: ComponentFixture<PicoplacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoplacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
