import { AlternativeContent } from "@/AlternativeContent";

export type HTMLAlternativeContentProps = {
    content: string;
};  

export class HTMLAlternativeContent implements AlternativeContent {
    private type: string = "HTML";
    private content: string;

    constructor({ content }: HTMLAlternativeContentProps) { 
        this.content = content;
    }

    public toHTML(): string {
        return this.content;
    }

    public getType(): string {
        return this.type;
    }
}