import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForms } from './login-forms';

describe('LoginForms', () => {
  let component: LoginForms;
  let fixture: ComponentFixture<LoginForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
