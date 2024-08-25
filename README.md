# ad-compass

ad-compass is a TypeScript library for displaying alternative content when an ad blocker is active.

## Features

- Ad blocker detection
- Flexible alternative content placement
- Customizable placement strategies
- Event-driven architecture

## Installation

npm:
```bash
npm install ad-compass
```

cdn: 
```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

## Basic Usage

```typescript
import AdCompass, {
  AdCompassEventType,
  AppendChildStrategy,
  HTMLAlternativeContent,
  AlternativeContentPlacer,
} from "ad-compass";

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent({
    content: "<div>Alternative Content</div>",
  }),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: "#ad-container",
  }),
});

adCompass.initialize();
```

Note: `alternativeContentPlacer` is a required option.

## Module Structure

`src/index.ts`

```typescript
export {
  AdCompassEventType,
  ErrorCode,
  AppendChildStrategy,
  InsertBeforeStrategy,
  HTMLAlternativeContent,
  ImageAlternativeContent,
  AlternativeContentPlacer,
};

export type {
  PlacementStrategy,
  AlternativeContent,
}

export default AdCompass;
```

## Class Structure

### AdCompass

The main class that provides the core functionality of the library.

#### Constructor

```typescript
constructor(options: AdCompassOptions)
```

- `options`: Initialization options (`alternativeContentPlacer` is required)

#### Methods

- `initialize()`: Initializes the library.
- `on(eventType: AdCompassEventType, callback: Function)`: Adds an event listener.
- `off(eventType: AdCompassEventType, callback: Function)`: Removes an event listener.

### AlternativeContent

Interface representing alternative content.

#### Implementation Classes

- `HTMLAlternativeContent`: Alternative content as an HTML string
- `ImageAlternativeContent`: Alternative content as an image

##### HTMLAlternativeContent

```typescript
export type HTMLAlternativeContentProps = {
    content: string; // HTML string
};
```

#### ImageAlternativeContent

```typescript
type BaseImageProps = {
    src: string;
    alt?: string;
    style?: string;
};

type AdditionalProps = {
    [key: string]: string | number | boolean;
};

export type ImageAlternativeContentProps = BaseImageProps & AdditionalProps;
```

### AlternativeContentPlacer

Class for placing alternative content. Required when initializing AdCompass.

#### Constructor

```typescript
constructor(props: AlternativeContentPlacerProps)
```

```typescript
type AlternativeContentPlacerProps = {
  placementStrategy: PlacementStrategy;
  targetSelector: string;
};
```

### PlacementStrategy

Interface defining content placement strategy.

```typescript
export interface PlacementStrategy {
    place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement>;  
}
```

#### Implementation Classes

- `AppendChildStrategy`: Strategy to append as a child element
- `InsertBeforeStrategy`: Strategy to insert before an element

## Events

AdCompass emits the following events:

- `ALTERNATIVE_CONTENT_IMPRESSION`: When alternative content is displayed
- `ALTERNATIVE_CONTENT_CLICK`: When alternative content is clicked
- `ERROR`: When an error occurs

## Error Handling

The `ErrorCode` enum is defined with the following error codes:

- `TARGET_ELEMENT_NOT_FOUND`: Target element not found
- `INITIALIZATION_FAILED`: Initialization failed
- `CONTENT_PLACE_FAILED`: Content placement failed
- `UNKNOWN`: Unknown error

## Usage Example

```typescript
import AdCompass, {
  AdCompassEventType,
  AppendChildStrategy,
  HTMLAlternativeContent,
  AlternativeContentPlacer,
} from "ad-compass";

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent({
    content: "<div>Alternative Content</div>",
  }),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: "#ad-container",
  }),
});

adCompass.on(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, () => {
  console.log("Ad blocker is being used");
  console.log("Alternative content has been displayed");
});

adCompass.initialize();
```

## License

Published under the MIT License. See the [LICENSE](LICENSE) file for details.