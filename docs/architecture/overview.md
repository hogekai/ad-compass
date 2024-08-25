```mermaid
graph TD
    A[AdCompass] --> B[AlternativeContent]
    E[EventEmitter]

    B --> J[HtmlAlternativeContent]
    B --> K[ImageAlternativeContent]

    A --> D[AlternativeContentPlacer]

    D --> I[PlacementStrategy]
    I --> N[InsertBeforeStrategy]
    I --> O[AppendChildStrategy]
```