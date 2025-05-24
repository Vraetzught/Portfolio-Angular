import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarrouselComponent } from './image-carrousel.component';

describe('ImageCarrouselComponent', () => {
  let component: ImageCarrouselComponent;
  let fixture: ComponentFixture<ImageCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
