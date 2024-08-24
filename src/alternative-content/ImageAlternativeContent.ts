import { AlternativeContent } from "@/AlternativeContent";

export type ImageAlternativeContentProps = {
    src: string;
    alt?: string;
    style?: string;
};

export class ImageAlternativeContent implements AlternativeContent {
    private type: string = "Image";
    private src: string;
    private alt: string;
    private style: string;

    constructor({ src, alt = '', style = ''}: ImageAlternativeContentProps) {
        this.src = src;
        this.alt = alt;
        this.style = style;
    }

    public toHTML(): string {
        return `<img src="${this.src}" alt="${this.alt}" style="${this.style}">`;
    }

    public getType(): string {
        return this.type;
    }
}