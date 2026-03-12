import type { Project } from "../../types/project"

import { gemenyApp } from "./gemenyApp"
import { gemenyAuth } from "./gemenyAuth"
import { portfolio } from "./portfolio"
import { eQonnect } from "./eQonnect"


export const projectsList: Project[] = [
    eQonnect,
    gemenyApp,
    gemenyAuth,
    portfolio,

]