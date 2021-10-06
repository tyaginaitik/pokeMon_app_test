import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokemonNameListingComponent } from './pokemon-name-listing.component';

describe('PokemonNameListingComponent', () => {
  let component: PokemonNameListingComponent;
  let fixture: ComponentFixture<PokemonNameListingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNameListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNameListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
