export interface Pokemon {
    name: string;
    url: string;
}

export interface PokeListObject {
    count: number;
    next: string;
    previous?: any;
    results: Pokemon[];
}


