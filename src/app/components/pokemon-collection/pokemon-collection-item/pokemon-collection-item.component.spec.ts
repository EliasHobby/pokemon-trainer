import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCollectionItemComponent } from './pokemon-collection-item.component';

describe('PokemonCollectionItemComponent', () => {
  let component: PokemonCollectionItemComponent;
  let fixture: ComponentFixture<PokemonCollectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCollectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
