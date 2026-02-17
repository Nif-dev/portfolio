// types/eqonnect.ts
export interface CardData {
    name: string
    title: string
    color: string
    tagline?: string
    avatarUrl: string
    primaryLinks: Link[]
    socials: SocialLink[]
    location?: string
    template: TemplateType

}

export type TemplateType = 'hexagon' | 'pro' | 'simple'
export type Link = { label: string; url: string; icon?: string }
export type SocialLink = { label: string; url: string; icon: string }
