export interface Infirmiere {
  id: number;
  adresse: {
    id: number;
  };
  numeroProfessionnel: number;
  nom: string;
  prenom: string;
  telPro: string;
  telPerso: string;
  patients: object;
  deplacements: object;
}
