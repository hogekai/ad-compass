# ad-compass

ad-compassは、広告ブロッカーが有効になっている場合に代替コンテンツを表示するためのTypeScriptライブラリです。

## 特徴

- 広告ブロッカーの検出
- 柔軟な代替コンテンツの配置
- カスタマイズ可能な配置戦略
- イベント駆動型アーキテクチャ

## インストール

```bash
npm install ad-compass
```

## 基本的な使用方法

```typescript
import AdCompass from 'ad-compass';
import { HTMLAlternativeContent } from 'ad-compass/alternative-content';
import { AlternativeContentPlacer } from 'ad-compass/content-placer';
import { AppendChildStrategy } from 'ad-compass/placement-strategy';

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent('<div>代替コンテンツ</div>'),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: '#ad-container'
  })
});

adCompass.initialize();
```

注意: `alternativeContentPlacer`は必須のオプションです。

## モジュール構造

`src/index.ts`ファイルは以下のようになっています：

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

- `HTMLAlternativeContent`: HTML文字列としての代替コンテンツ
- `ImageAlternativeContent`: 画像としての代替コンテンツ

### AlternativeContentPlacer

代替コンテンツを配置するためのクラス。AdCompassの初期化時に必須です。

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

#### 実装クラス

- `AppendChildStrategy`: 子要素として追加する戦略
- `InsertBeforeStrategy`: 要素の前に挿入する戦略

## イベント

AdCompassは以下のイベントを発行します：

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
import AdCompass, { AdCompassEventType, AppendChildStrategy } from 'ad-compass';
import { HTMLAlternativeContent } from 'ad-compass/alternative-content';
import { AlternativeContentPlacer } from 'ad-compass/content-placer';

const adCompass = new AdCompass({
  alternativeContent: new HTMLAlternativeContent('<div>広告の代わりに表示されるコンテンツ</div>'),
  alternativeContentPlacer: new AlternativeContentPlacer({
    placementStrategy: new AppendChildStrategy(),
    targetSelector: '#ad-container'
  })
});

adCompass.on(AdCompassEventType.ALTERNATIVE_CONTENT_IMPRESSION, () => {
  console.log('代替コンテンツが表示されました');
});

adCompass.initialize();
```

## ライセンス

MITライセンスの下で公開されています。詳細については[LICENSE](../LICENSE)ファイルを参照してください。