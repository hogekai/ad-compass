```mermaid
classDiagram
    class AdCompass {
        -alternativeContent: AlternativeContent
        -adBlockDetector: AdBlockDetector
        -alternativeContentPlacer: AlternativeContentPlacer
        -eventEmitter: eventEmitter

        +constructor(options: AdCompassOptions)

        +detectAdBlock(): Promise<boolean>
        +placeAlternativeContent(): Promise<void>

        +on(eventType: AdCompassEventType, callback: Function): void
        +off(eventType: AdCompassEventType, callback: Function): void

        +setAlternativeContent(content: AlternativeContent): void
        +setAdBlockDetector(detector: AdBlockDetector): void
        +setContentPlacer(placer: AlternativeContentPlacer): void

        -handleError(error: AdCompassError): void
    }

    class AdCompassOptions {
        <<interface>>
        +targetSelector: string
        +adBlockDetector?: AdBlockDetector
        +alternativeContentPlacer?: AlternativeContentPlacer
        +alternativeContent?: AlternativeContent
    }

    class AlternativeContent  {
        <<interface>>
        +render(): void
        +getType(): string
    }

    class HTMLAlternativeContent {
        -content: string
        +render(): void
        +getType(): string
    }

    class ImageAlternativeContent {
        -imageUrl: string
        +render(): void
        +getType(): string
    }

    class AdBlockDetector {
        <<interface>>
        +detect(): Promise<boolean>
    }

    class CompositeAdBlockDetector {
        -adBlockDetectors: AdBlockDetector[]
        +constructor(adBlockDetectors: AdBlockDetector[])
        +detect(): Promise<boolean>
    }

    class AssetLoadDetector {
        -assetUrl: string
        +detect(): Promise<boolean>
    }

    class EventEmitter {
        -listeners: Map<string, Function[]>
        +emit(eventType: string, data: any): void
        +on(eventType: string, callback: Function): void
        +off(eventType: string, callback: Function): void
    }

    class AlternativeContentPlacer {
        -strategy: PlacementStrategy
        +place(content: AlternativeContent, targetSelector: string): Promise<HTMLElement>
    }

    class PlacementStrategy {
        <<interface>>
        +place(content: AlternativeContent, targetElement: HTMLElement): Promise<void>
    }

    class AppendChildStrategy {
        +place(content: AlternativeContent, targetElement: HTMLElement): Promise<void>
    }

    class InsertBeforeStrategy {
        +place(content, AlternativeContent, targetElement: HTMLElement): Promise<void>
    }

    class AdCompassError extends Error {
        +code: ErrorCode
        +details: any
    }

    AdCompass *-- AlternativeContent
    AdCompass *-- AdBlockDetector
    AdCompass *-- AlternativeContentPlacer
    AdCompass *-- EventEmitter
    AdCompass ..> AdCompassOptions
    AdCompass ..> AdCompassError

    AdBlockDetector <|.. CompositeAdBlockDetector
    AdBlockDetector <|.. AssetLoadDetector

    AlternativeContentPlacer ..> AlternativeContent
    AlternativeContentPlacer o-- PlacementStrategy   
    AlternativeContentPlacer --> EventEmitter

    PlacementStrategy <|.. AppendChildStrategy
    PlacementStrategy <|.. InsertBeforeStrategy

    AlternativeContent <|.. HTMLAlternativeContent
    AlternativeContent <|.. ImageAlternativeContent

    class AdCompassEventType {
        <<enumeration>>
        ALTERNATIVE_CONTENT_IMPRESSION
        ALTERNATIVE_CONTENT_CLICK
        ERROR
    }

    class ErrorCode {
        <<enumeration>>
        INITIALIZATION_FAILED
        AD_BLOCK_DETECTION_FAILED
        CONTENT_DISPLAY_FAILED
    }
```