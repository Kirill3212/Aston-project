export interface SinglePokemonResponse {
    name: string,
    url: string
}

export interface SinglePokemonCardResponse {
    abilities: [],
    base_experience: number,
    forms: [],
    game_indices: [],
    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encounter: string,
    moves: [],
    name: string,
    order: number,
    past_abilities: [],
    past_types: [],
    species: Object,
    sprites: TSprites,
    stats: [],
    types: [],
    weight: number
}

export interface SinglePokemonData {
    id: number
    attacks: [],
    experience: number,
    height: number,
    weight: number,
    moves: [],
    name: string,
    type: string,
    // Images
    mainImage: string,
    backupImage: string,
    animatedImage: string,
}

// Sprites
export type TSprites = {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
    other: TSpritesInner,
}
export type TSpritesInner = {
    dream_world: TSpriresDreamWorld
}
export type TSpriresDreamWorld = {
    front_default: string,
    front_female: string,
}