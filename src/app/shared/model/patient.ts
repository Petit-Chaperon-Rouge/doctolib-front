import { Adresse } from "./adresse";
import { Infirmiere } from "./infirmiere";

export interface Patient {
  id: number;
  adresse: Adresse;
  infirmiere: Infirmiere;
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  sexe: SexeEnum;
  numeroSecuriteSocial: bigint;
}

export enum SexeEnum {
    Homme,
    Femme,
    Autre
}