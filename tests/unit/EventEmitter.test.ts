import { describe, expect, it, vi } from "vitest";
import { EventEmitter } from "@/EventEmitter";
import { AdCompassEventType } from "@/types/AdCompassEventType";  

describe('EventEmitter', () => {
    it('should emit events', () => {
        const emitter = new EventEmitter();

        const callback = vi.fn();
        emitter.on(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, callback);
        emitter.emit(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, {});

        expect(callback).toHaveBeenCalled();        
    });

    it('should listen to events', () => {
        // test code
    });

    it('should remove listeners', () => {
        // test code
    }); 
});