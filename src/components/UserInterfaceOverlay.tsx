import { createSignal } from "solid-js"
import { selectedCountryId, setSelectedCountryId } from "../components/Map";
import { setNavBarOpen } from "./HamburgerIcon";


type CharactersType = "countries" | "extra";

export const [sideViewOpen, setSideViewOpen] = createSignal(false);
export const [characters, setCharacters] = createSignal<Array<CharactersType>>(["countries"]);

export const closeUI = () => {
  const selectedCountryId_ = selectedCountryId();
  setSideViewOpen(false);
  setSelectedCountryId(undefined);
  setNavBarOpen(false);
}

export const camelCaseToWords = (s: string) => {
  const result = s.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const UserInterfaceOverlay = () => {
  return <div />
}