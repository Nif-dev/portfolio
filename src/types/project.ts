import type { Skill } from "./skill";

// Typage des projets
export interface Project {
    name: string;
    localesName: string;
    icon: string;
    images: string[];
    tags: string[];
    cardLinkedSkills: Skill[];
    allLinkedSkills: Skill[];
    
    link?: string;
    onlineLink?: string;
    presentation?: string;


}