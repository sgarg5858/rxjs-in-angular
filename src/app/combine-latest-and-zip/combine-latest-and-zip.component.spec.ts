import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAndZipComponent } from './combine-latest-and-zip.component';

describe('CombineLatestAndZipComponent', () => {
  let component: CombineLatestAndZipComponent;
  let fixture: ComponentFixture<CombineLatestAndZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestAndZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestAndZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
