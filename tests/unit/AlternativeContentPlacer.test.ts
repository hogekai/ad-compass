import { PlacementStrategy } from "@/PlacementStrategy";
import { MockPlacementStrategy } from "tests/mock/MockPlacementStrategy";
import { beforeEach, describe, expect, it } from "vitest";

describe('AlternativeContentPlacer', () => {    
    let placer: AlternativeContentPlacer;
    let mockStrategy: PlacementStrategy;
    let targetSelector = '#target';
    let targetElement: HTMLDivElement;

    beforeEach(() => {
        mockStrategy = new MockPlacementStrategy();
        targetElement = document.createElement('div');
        targetElement.id = 'target';
        document.body.appendChild(targetElement);
        
        placer = new AlternativeContentPlacer({
            strategy: mockStartegy,
            targetSelector: targetSelector
        });
    });

    describe('isTargetEmpty', () => {
        it('should return true when target element is empty', () => {
            const result = placer.isTargetEmpty();

            expect(result).toBe(true);
        });

        it('should return false when target element is not empty', () => {
            targetElement.innerHTML = 'Some content';
            const result = placer.isTargetEmpty();

            expect(result).toBe(false);
        });

        it('should throw an error when target element does not exist', () => {
            expect(() => placer.isTargetEmpty('#none-existent')).toThrow();
        });
    });
});