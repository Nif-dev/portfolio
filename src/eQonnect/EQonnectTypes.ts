// types/eqonnect.ts
export interface CardData {
    name: string
    title: string
    color: string
    tagline?: string
    avatarUrl: string
    primaryLinks: Link[]
    socials: Link[]
    qrCodeLinks?: QRCodeLink[]
    location?: string
    template: TemplateType

}

export interface QRCodeLink {
    label: string // label du lien du code QR
    
    urlLink: string // lien du code QR à générer
    width?: number // optionnel > défaut 128
    height?: number // optionnel > defaut 128

}

export interface QRCodeOptions {
    QRCodeLink: QRCodeLink,
    htmlElement: string // id de mon conteneur
}

export type TemplateType = 'hexagon' | 'pro' | 'simple'
export type Link = { label: string; url: string; icon?: string }
