# ad-compass

ad-compass is a TypeScript library for displaying alternative content when ad blockers are enabled.

## Features

- Ad blocker detection
- Flexible alternative content placement
- Customizable placement strategies
- Event-driven architecture

## Installation

```bash
npm install ad-compass
```

## Basic Usage

```typescript
import AdCompass from 'ad-compass';
import { HTMLAlternativeContent } from 'ad-compass/alternative-content';
import { AlternativeContentPlacer } from 'ad-compass/content-placer';
import { AppendChildStrategy } from 'ad-compass/placement-strategy';

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent('<div>Alternative content</div>'),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: '#ad-container'
  })
});

adCompass.initialize();
```

Note: `alternativeContentPlacer` is a required option.

## Module Structure

The `src/index.ts` file looks like this:

```typescript
import { AdCompass } from "./AdCompass";
import { AdCompassEventType} from "./types/AdCompassEventType";
import { ErrorCode } from "./types/ErrorCode";
import { AppendChildStrategy, InsertBeforeStrategy } from "./placement-strategy/";

export {
  AdCompassEventType,
  ErrorCode,
  AppendChildStrategy,
  InsertBeforeStrategy
};

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

#### Implementing Classes

- `HTMLAlternativeContent`: Alternative content as an HTML string
- `ImageAlternativeContent`: Alternative content as an image

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

Interface defining content placement strategies.

#### Implementing Classes

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
import AdCompass, { AdCompassEventType, AppendChildStrategy } from 'ad-compass';
import { HTMLAlternativeContent } from 'ad-compass/alternative-content';
import { AlternativeContentPlacer } from 'ad-compass/content-placer';

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent('<div>Content to display instead of ads</div>'),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: '#ad-container'
  })
});

adCompass.on(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, () => {
  console.log('Alternative content has been displayed');
});

adCompass.initialize();
```

## License

Released under the MIT License. See the [LICENSE](LICENSE) file for details.