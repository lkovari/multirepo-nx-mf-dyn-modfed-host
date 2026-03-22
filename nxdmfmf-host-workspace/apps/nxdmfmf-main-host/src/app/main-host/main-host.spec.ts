import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainHost } from './main-host';

describe('MainHost', () => {
  let component: MainHost;
  let fixture: ComponentFixture<MainHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHost],
    }).compileComponents();

    fixture = TestBed.createComponent(MainHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
