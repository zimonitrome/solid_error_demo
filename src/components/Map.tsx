import { createSignal } from "solid-js";
import { ParentComponent } from 'solid-js';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { CountrySprite, Map as MapSkin, Vote } from "@prisma/client";
import { createStore, produce } from "solid-js/store";


export interface FrontEndStereotype {
  score: number;
  userVote: Vote | undefined;
  id: string;
  GenericStereotypeId: string | null;
  countryId: string;
  title: string;
  description: string;
}

export interface FrontEndCountry {
  id: string
  name: string
  stereotypes?: FrontEndStereotype[]
  type?: string | null
  parentCountryId?: string | null
  subtitle?: string | null
  description?: string | null
  countrySprites: CountrySprite[]
}

export type StoreType = {
  countries?: FrontEndCountry[]
}

export const DEFAULT_MAP = "brain4breakfast 2014";
export const [map, setMap] = createSignal<mapboxgl.Map>();
export const [avaliableMapSkins, setAvaliableMapSkins] = createStore<Array<MapSkin & {countrySprites: CountrySprite[]}>>([]);
export const [mapSkin, setMapSkin] = createSignal<string>(DEFAULT_MAP);
export const [selectedCountryId, setSelectedCountryId] = createSignal<string | undefined>(undefined);
export const [mainStore, setMainStore] = createStore<StoreType>({ countries: undefined });
export let markers = new Array<mapboxgl.Marker>();


export const Map: ParentComponent = (props) => {

  return <div>
    <h1>Main page</h1>
  </div>
};