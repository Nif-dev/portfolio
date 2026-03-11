import type { Skill } from "./skill";

// Typage des projets
export interface Project {

    //nom du projet
    name: string;

    // réf du projet - affichage VUE
    localesName: string;
    icon: string;

    //tableau d'images - impressions écrans, docs, etc
    images: string[];

    //tags du projet
    tags: string[];

    // compétences affichés sur la card - principales
    cardLinkedSkills: Skill[];

    // toutes les compétences liées au projet
    allLinkedSkills: Skill[];
    
    // lien vers le projet en ligne
    link?: string;

    // autre lien lié au projet
    onlineLink?: string;

    // lien vers le github/lab projet
    githubLink?: string;

    // lien vers la page du projet sur portfolio
    presentation?: string;


}