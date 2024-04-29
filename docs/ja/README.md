# AdCompass : 広告ブロックへの優しい対応

## 👀 問題

### 課題の概要:

デジタル経済において、多くのウェブサイトは広告収入に大きく依存しています。しかし、ウェブユーザーのかなりの割合が広告ブロッカーを使用しており、特にメディアサイトやコンテンツクリエイターにとって、これが大きな収益損失につながっています。多くのユーザーは、自分の広告ブロックの選択がコンテンツの可用性や品質にどのような影響を与えるかを十分に認識していません。

### データとフィードバック:

業界の調査によると、約25-30％のウェブユーザーが広告ブロッキングツールを使用しています。一部のウェブサイトでは、これにより年間で数十万ドルの収益損失に至ることがあります。

### クライアントの協力:

複数の出版社や大手メディアサイトからのフィードバックを基にしており、彼らは広告収入の回復を急いで求めている。

### 問題の緊急性:

デジタル広告の成長に伴い、広告ブロックの悪影響も増大しています。クオリティの高い創造的なコンテンツを提供し続けるためには、持続可能な収益モデルを見つけることが重要です。

## 💭 提案

### AdCompassの紹介

AdCompassは、広告ブロッカーを有効にしているユーザーに対話するためのライブラリです。カスタマイズ可能でI18n対応の礼儀正しい通知を表示し、ユーザーに広告ブロッカーの無効化を優しく促し、サイトの収益支援をお願いします。

### **代替案と選定理由**:

- **警告ポップアップ**: 利用者に強制感を与えるため、否定的なユーザー体験を生み出す可能性がある。
- **有料サブスクリプションモデル**: ユーザーが支払いを渋ることが多く、転換率が低い。

通知を選んだ理由は、ユーザーに友好的でありながら、広告の重要性を教育するアプローチを取る点にあります。

## 🚀 利用を開始

* node.js環境はサポートしていません。

```
npm i ad-compass
```

パッケージがインストールされたら、import文を使用してライブラリをインポートできます。
```javascript
import AdCompass from "ad-compass";
```

スクリプトを実行します。
```javascript
const adCompass = new AdCompass();
adCompass.run();
```

これで終わり！

もしくは、CDN

スクリプトを設置します。
```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

スクリプトを実行します。
```html
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

これで終わり！

### 通知をカスタマイズする

#### カテゴリーごとのデフォルトメッセージ

AdCompassでは、サイトのカテゴリーによって表示されるメッセージがデフォルトで用意されています。
例えばあなたがテクノロジー関係のサイトを運営しているとします。

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompassは下記のカテゴリをサポートしており、`AdCompass.SiteCategories`からアクセスできます。

```typescript
enum AdCompassSiteCategories {
  newsSite, // ニュースサイト
  entertainmentSite, // エンターテインメントサイト
  educationalSite, // 教育サイト
  lifestyleSite, // ライフスタイルサイト
  technologySite, // テクノロジーサイト
}
```

### メッセージを変更する

あるいは、サイト独自のメッセージを設定したい場合があるかもしれません。

```javascript
const adCompass = new AdCompass({ message: 'こんにちは、世界！' });
adCompass.run();
```

### 通知の位置を変更する

デフォルトでTopCenterに配置される通知の位置を変更したい場合があるかもしれません。

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompassは下記の位置をサポートしており、`AdCompass.NotificationPosition`からアクセスできます。

```typescript
enum AdCompassNotificationPosition {
  topLeft = "top-left",
  topCenter = "top-center",
  topRight = "top-right",
  bottomLeft = "bottom-left",
  bottomCenter = "bottom-center",
  bottomRight = "bottom-right",
}
```

### ページを読み込んでから通知が表示されるまでの時間を調整する

通知が表示されるまでの時間をミリ単位で調節できます。
デフォルトは7秒です。

```javascript
const adCompass = new AdCompass({ delay: 1000 });
adCompass.run();
```

### 同じサイトで再度通知が表示されるまでのスパンを調整する

同じ通知でユーザーにストレスを与えないために、再度表示されるまでのスパン (日単位) を調整できます。
デフォルトは7日間です。

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

### オプション

用意されているオプション一覧です。

```javascript
type AdCompassOptions = {
  delay: number; // 表示されるまでの時間 (ミリ単位)
  category: AdCompassSiteCategories; // サイトのカテゴリー
  position: AdCompassNotificationPosition; // 通知の位置
  message?: string; // カスタムメッセージ
  daySpan: number; // 通知が再度表示されるまでのスパン (日単位)
};
```

## 最後に

AdCompassは広告ブロックを使用するユーザー、サイトの収益化を図りたいメディア、その両方を応援したいと考えています。
両者にとってWebがいいものになることを祈っています！