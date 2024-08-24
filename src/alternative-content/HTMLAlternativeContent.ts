import { AlternativeContent } from "@/AlternativeContent";

export class HTMLAlternativeContent implements AlternativeContent {
    private content: string;

    constructor({ content }: { content: string }) {
        this.content = content;
    }

    public toHTML(): string {
        return this.content;
    }

    public getType(): string {
        return "HTML";
    }
}