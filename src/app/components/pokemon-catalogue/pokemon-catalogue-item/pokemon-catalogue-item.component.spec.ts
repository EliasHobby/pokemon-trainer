import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCatalogueItemComponent } from './pokemon-catalogue-item.component';

describe('PokemonCatalogueItemComponent', () => {
  let component: PokemonCatalogueItemComponent;
  let fixture: ComponentFixture<PokemonCatalogueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCatalogueItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
