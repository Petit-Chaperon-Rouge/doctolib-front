import { Adresse } from "./adresse";

export interface Infirmiere {
  id: number;
  adresse: Adresse;
  numeroProfessionnel: number;
  nom: string;
  prenom: string;
  telPro: string;
  telPerso: string;
  patients: object;
  deplacements: object;
}
