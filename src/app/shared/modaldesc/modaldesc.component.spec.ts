import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldescComponent } from './modaldesc.component';

describe('ModaldescComponent', () => {
  let component: ModaldescComponent;
  let fixture: ComponentFixture<ModaldescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
