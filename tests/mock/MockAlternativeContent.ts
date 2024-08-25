import { AlternativeContent } from "@/AlternativeContent";

export class MockAlternativeContent implements AlternativeContent {
    public toHTML(): string {
        return '<div></div>';
    }
    public getType(): string {
        return 'Mock';
    }
}