import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlElementComponent } from './url-element.component';

describe('UrlElementComponent', () => {
  let component: UrlElementComponent;
  let fixture: ComponentFixture<UrlElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
