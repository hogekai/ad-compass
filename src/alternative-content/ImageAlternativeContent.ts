import { AlternativeContent } from "@/AlternativeContent";

type BaseImageProps = {
    src: string;
    alt?: string;
    style?: string;
};

type AdditionalProps = {
    [key: string]: string | number | boolean;
};

export type ImageAlternativeContentProps = BaseImageProps & AdditionalProps;

export class ImageAlternativeContent implements AlternativeContent {
    private type: string = "Image";
    private props: ImageAlternativeContentProps;

    constructor(props: ImageAlternativeContentProps) {
        this.props = props;
    }

    public toHTML(): string {
        const attributes = Object.entries(this.props)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ');
        return `<img ${attributes}>`;
    }

    public getType(): string {
        return this.type;
    }
}