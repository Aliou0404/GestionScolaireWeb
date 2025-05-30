export interface Apprenant{
  id ?: number,
  nom: string,
  prenom:string|null,
  image?: string,
  promo: number|null;
}

export interface Enseignant{
  id ?: number,
  nom: string,
  prenom: string,
  matieres:string,
  Images?: string;

}

export interface Formateurs{
  id? : number;
  nom:string;
  prenom:string;
  image ?: string;

}

export interface Filiere{
  id?: number,
  code: string,
  nom?: string,
  departement: string,
  description?: string,
}









