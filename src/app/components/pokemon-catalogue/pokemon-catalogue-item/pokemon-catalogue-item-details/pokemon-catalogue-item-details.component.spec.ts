import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatalogueItemDetailsComponent } from './pokemon-catalogue-item-details.component';

describe('PokemonCatalogueItemDetailsComponent', () => {
  let component: PokemonCatalogueItemDetailsComponent;
  let fixture: ComponentFixture<PokemonCatalogueItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCatalogueItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCatalogueItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
