// projet gemenyAuth.ts

import { images } from "../../assets/img/projects/gemenyAuth/index.ts";

import { skillsList } from '../skills/index.ts';

const linkedSkills = skillsList.filter(skill =>
    ["Java", "SpringBoot", "MariaDB", "SQL"].includes(skill.name)
);

const otherSkills = skillsList.filter(skill =>
    ["IntelliJ" ].includes(skill.name)
);

const allLinkedSkills = [...linkedSkills,... otherSkills]

export const gemenyAuth = {

    name: "Gemeny-Auth",
    localesName: "gemenyAuth",
    icon: images[0],
    images: images,
    tags: ["Fullstack"],
    cardLinkedSkills: linkedSkills,
    allLinkedSkills: allLinkedSkills,
    link: undefined,
    presentation : "/projet/gemenyAuth",
    
};

export const gemenyAuth_FR = {
    TITLE : "Gemeny_Auth_API",
    CARD_DESCRIPTION: "API REST pour la gestion des utilisateurs, authentification et gestion des droits dans l’ecosystème Gemeny Software.",

    DESCRIPTION: "Développement d’une API REST sécurisée pour la gestion d’utilisateurs, authentification et gestion des droits dans l’écosystème Gemeny Software.",

    COMPANY_NAME: "Gemeny Software",
    COMPANY_DESCRIPTION: "Gemeny Software est une société innovante en cybersécurité, spécialisée dans l’obfuscation et la protection des données sensibles. L’équipe allie expertise technique et maîtrise des enjeux de confidentialité.",

    API_TITLE: "L’API d’authentification Gemeny",
    API_DESCRIPTION: "Gemeny_Auth_API est un micro-service backend permettant la gestion des utilisateurs (inscription, connexion, rôles) et l’authentification sécurisée via JWT. L’API fournit une architecture évolutive et respecte les bonnes pratiques de sécurité web.",
    
    DIPLOMA_TITLE: "Contexte du projet présenté au diplôme",
    DIPLOMA_DESCRIPTION: "L’API portée lors de la présentation du diplôme vise à renforcer la sécurité des accès à l’application Gemeny, tout en isolant le back pour faciliter la maintenance et l’évolutivité. Le développement a été réalisé en suivant le modèle MVC et des pratiques modernes côté Spring Boot.",
    
    OBJECTIVES: "Objectifs clés",
    OBJECTIVE_1: "Sécuriser et centraliser la gestion des utilisateurs et des accès.",
    OBJECTIVE_2: "Mettre en place une authentification stateless (JWT).",
    OBJECTIVE_3: "Séparer front et back pour plus de sécurité et de modularité.",
    OBJECTIVE_4: "Rendre l’API facilement testable, scalable, documentée.",
    OBJECTIVE_5: "Respecter les standards OWASP (prévention XSS, CSRF, injections SQL).",
    
    ENVIRONMENT_TITLE: "Environnement technique",
    ENVIRONMENT_DESCRIPTION: `Java 21, Spring Boot 3.4, Maven, MariaDB, HeidiSQL, Git, IntelliJ IDEA, Postman. Documentation et tests réalisés avec Postman, respect du modèle MVC et utilisation de DTO pour la sécurité.`,

    ORGANISATION_TITLE: "Organisation et gestion du projet",
    ORGANISATION_DESCRIPTION: `Gestion en méthode Agile (dailies, Kanban GitLab), versioning Git, découpage fonctionnel par branches. Cycle de vie des tâches conforme aux best practices (code review, merge PR).`,

    DESIGN_TITLE: "Architecture & design",
    DESIGN_DESCRIPTION: `Principe micro-service REST stateless avec distinction forte entre contrôleurs, services et entités. Utilisation de Spring Security pour la gestion des rôles et tokens, schémas UML pour la conception, MCD/MLD pour la BDD.`,

    STRUCTURE_TITLE: "Structure technique et code",
    STRUCTURE_DESCRIPTION: `Organisation en modules par responsabilité (user, auth, admin). Patrons DTO pour les transferts de données, endpoints documentés, logique métier centralisée, repository dédié pour chaque entité.`,

    REALISATION_TITLE: "Fonctionnalités implémentées",
    REALISATION_DESCRIPTION: `
- Création/gestion des comptes utilisateurs 
- Authentification via JWT stateless 
- Attribution et contrôle des rôles (User/Admin/SuperAdmin) 
- Sécurité des endpoints, requêtes préparées et hashage (BCrypt)
- Documentation API via Postman/Swagger 
- Tests unitaires des méthodes importantes
    `,

    DEPLOYMENT_TITLE: "Déploiement et sécurité",
    DEPLOYMENT_DESCRIPTION: `Déploiement local sur Laragon, possibilité de conteneurisation (Docker). Sécurisation via variables d’environnement, logs anonymisés, contrôle des accès via tokens. Meilleures pratiques appliquées sur la gestion des erreurs, exposition minimale en production.`,

        DWWM_TITLE : "Soutenance du diplôme DWWM ",
    DWWM_DESCRIPTION : "Ce projet a servi de support principal à ma soutenance pour l'obtention du titre Développeur Web et Web Mobile (DWWM).Vous pouvez consulter les documents de présentation ci-dessous :",

    DWWM_LINK_1 : "PDF 1 – Rapport de projet",
    DWWM_LINK_2 : "PDF 2 – Support de présentation",

};

export const gemenyAuth_EN = {
    TITLE: "Gemeny_Auth_API",
    CARD_DESCRIPTION: "Secure REST API for user management, authentication, and access rights handling within the Gemeny Software ecosystem.",

    DESCRIPTION: "Development of a secure REST API for user management, authentication, and access rights handling within the Gemeny Software ecosystem.",

    COMPANY_NAME: "Gemeny Software",
    COMPANY_DESCRIPTION: "Gemeny Software is an innovative cybersecurity company, specializing in obfuscation and sensitive data protection. The team combines technical expertise with a strong focus on privacy challenges.",

    API_TITLE: "Gemeny Authentication API",
    API_DESCRIPTION: "Gemeny_Auth_API is a backend microservice enabling user management (registration, login, roles) and secure JWT-based authentication. The API provides a scalable architecture and follows best practices in web security.",

    DIPLOMA_TITLE: "Project Overview for Diploma Presentation",
    DIPLOMA_DESCRIPTION: "The API showcased at the diploma presentation is designed to enhance access security for the Gemeny application, while isolating the backend to simplify maintenance and improve scalability. Development was based on the MVC pattern and modern practices with Spring Boot.",

    OBJECTIVES: "Key objectives",
    OBJECTIVE_1: "Securely centralize user and access management.",
    OBJECTIVE_2: "Implement stateless authentication (JWT).",
    OBJECTIVE_3: "Separate frontend and backend for greater security and modularity.",
    OBJECTIVE_4: "Ensure the API is easily testable, scalable, and well documented.",
    OBJECTIVE_5: "Comply with OWASP standards (XSS, CSRF, SQL injection prevention).",

    ENVIRONMENT_TITLE: "Technical environment",
    ENVIRONMENT_DESCRIPTION: `Java 21, Spring Boot 3.4, Maven, MariaDB, HeidiSQL, Git, IntelliJ IDEA, Postman. Documentation and testing performed with Postman, adherence to MVC design, and use of DTOs for security.`,

    ORGANISATION_TITLE: "Project organization and management",
    ORGANISATION_DESCRIPTION: `Agile methodology (dailies, GitLab Kanban), Git versioning, functional decomposition via branches. Task lifecycle adheres to best practices (code review, merge PR).`,

    DESIGN_TITLE: "Architecture & design",
    DESIGN_DESCRIPTION: `Stateless microservice REST principle with clear separation between controllers, services, and entities. Use of Spring Security for roles and token management, UML diagrams for design, and ER models (MCD/MLD) for the database.`,

    STRUCTURE_TITLE: "Technical structure and code",
    STRUCTURE_DESCRIPTION: `Module-based organization by responsibility (user, auth, admin). DTO patterns for data transfer, documented endpoints, centralized business logic, dedicated repository for each entity.`,

    REALISATION_TITLE: "Implemented features",
    REALISATION_DESCRIPTION: `
- User account creation/management
- Stateless authentication via JWT
- Role assignment and control (User/Admin/SuperAdmin)
- Endpoint security, prepared statements, and hashing (BCrypt)
- API documentation via Postman/Swagger
- Unit testing of key methods
    `,

    DEPLOYMENT_TITLE: "Deployment and security",
    DEPLOYMENT_DESCRIPTION: `Local deployment on Laragon, containerization possible (Docker). Security via environment variables, anonymized logs, access control via tokens. Best practices applied for error management and minimal production exposure.`,

    DWWM_TITLE : "Support for the DWWM diploma",
    DWWM_DESCRIPTION : "This project served as the main support for my presentation at the SOFINS exhibition for obtaining the DWWM title. You can find the presentation documents below:",

    DWWM_LINK_1 : "PDF 1 - Project Report",
    DWWM_LINK_2 : "PDF 2 - Presentation Support - Powerpoint",

};
