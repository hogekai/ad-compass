# ad-compass

ad-compass は、広告ブロッカーが有効になっている場合に代替コンテンツを表示するための TypeScript ライブラリです。

## 特徴

- 広告ブロッカーの検出
- 柔軟な代替コンテンツの配置
- カスタマイズ可能な配置戦略
- イベント駆動型アーキテクチャ

## インストール

npm:
```bash
npm install ad-compass
```

cdn: 
```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

## 基本的な使用方法

```typescript
import AdCompass, {
  AdCompassEventType,
  AppendChildStrategy,
  HTMLAlternativeContent,
  AlternativeContentPlacer,
} from "ad-compass";

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent({
    content: "<div>代替コンテンツ</div>",
  }),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: "#ad-container",
  }),
});

adCompass.initialize();
```

注意: `alternativeContentPlacer`は必須のオプションです。

## モジュール構造

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

## クラス構造

### AdCompass

メインクラスで、ライブラリの中心的な機能を提供します。

#### コンストラクタ

```typescript
constructor(options: AdCompassOptions)
```

- `options`: 初期化オプション（`alternativeContentPlacer`は必須）

#### メソッド

- `initialize()`: ライブラリを初期化します。
- `on(eventType: AdCompassEventType, callback: Function)`: イベントリスナーを追加します。
- `off(eventType: AdCompassEventType, callback: Function)`: イベントリスナーを削除します。

### AlternativeContent

代替コンテンツを表すインターフェース。

#### 実装クラス

- `HTMLAlternativeContent`: HTML 文字列としての代替コンテンツ
- `ImageAlternativeContent`: 画像としての代替コンテンツ

##### HTMLAlternativeContent

```typescript
export type HTMLAlternativeContentProps = {
    content: string; // HTML文字列
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

代替コンテンツを配置するためのクラス。AdCompass の初期化時に必須です。

#### コンストラクタ

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

コンテンツ配置戦略を定義するインターフェース。

```typescript
export interface PlacementStrategy {
    place(content: AlternativeContent, targetElement: HTMLElement): Promise<HTMLElement>;  
}
```

#### 実装クラス

- `AppendChildStrategy`: 子要素として追加する戦略
- `InsertBeforeStrategy`: 要素の前に挿入する戦略

## イベント

AdCompass は以下のイベントを発行します：

- `ALTERNATIVE_CONTENT_IMPRESSION`: 代替コンテンツが表示されたとき
- `ALTERNATIVE_CONTENT_CLICK`: 代替コンテンツがクリックされたとき
- `ERROR`: エラーが発生したとき

## エラーハンドリング

`ErrorCode`列挙型が定義されており、以下のエラーコードが利用可能です：

- `TARGET_ELEMENT_NOT_FOUND`: ターゲット要素が見つからない
- `INITIALIZATION_FAILED`: 初期化に失敗
- `CONTENT_PLACE_FAILED`: コンテンツの配置に失敗
- `UNKNOWN`: 不明なエラー

## 使用例

```typescript
import AdCompass, {
  AdCompassEventType,
  AppendChildStrategy,
  HTMLAlternativeContent,
  AlternativeContentPlacer,
} from "ad-compass";

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent({
    content: "<div>代替コンテンツ</div>",
  }),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: "#ad-container",
  }),
});

adCompass.on(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, () => {
  console.log("広告ブロッカーが使用されています");
  console.log("代替コンテンツが表示されました");
});

adCompass.initialize();
```

## ライセンス

MIT ライセンスの下で公開されています。詳細については[LICENSE](../LICENSE)ファイルを参照してください。
