import { Adresse } from "./adresse";

export interface Patient {
  id: number;
  adresse: Adresse;
  infirmiere: {
    id: number;
  };
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