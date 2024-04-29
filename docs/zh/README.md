# AdCompass：友好的广告拦截解决方案

## 👀 问题

### 问题概述：

在数字经济中，许多网站严重依赖广告收入。然而，大量网民使用广告拦截器，导致尤其是媒体站点和内容创作者的收入大幅减少。许多用户并不完全了解他们选择屏蔽广告对内容的可用性和质量的影响。

### 数据和反馈：

行业研究表明，约有25-30%的网民使用广告拦截工具。对某些网站来说，这可能导致每年损失高达数十万美元的收入。

### 客户合作：

根据多家出版商和主要媒体站点的反馈，他们迫切寻求恢复广告收入的方法。

### 问题的紧迫性：

随着数字广告的增长，广告屏蔽的负面影响在增加。找到可持续的收入模式对于继续提供高质量的创意内容至关重要。

## 💭 建议

### 介绍 AdCompass

AdCompass 是一个旨在吸引启用广告拦截器的用户的库。它显示可自定义的、支持国际化的、礼貌的通知，轻轻地鼓励用户禁用他们的广告拦截器并支持网站的收入。

### **选择替代方案及其原因**：

- **警告弹出窗口**：可能由于感觉强制性而造成负面用户体验。
- **付费订阅模式**：通常遭到用户不愿付费的抵制，导致转化率低。

选择通知的原因是它们在教育用户了解广告重要性的同时，方法友好。

## 📚 兼容性

确认的广告拦截器：

- AdBlock
- AdGuard
- Brave Shield

支持的语言：

- 英语
- 日语
- 西班牙语
- 中文
- 法语
- 德语

## 🚀 开始使用

* 我们不支持 node.js 环境。

```bash
npm i ad-compass
```

安装包后，您可以使用导入语句导入库。

```javascript
import AdCompass from "ad-compass";
```

执行脚本。

```javascript
const adCompass = new AdCompass();
adCompass.run();
```

就是这样！

或者，使用 CDN

设置脚本。

```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

执行脚本。

```html
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

就是这样！

### 自定义通知

#### 按类别的默认消息

在 AdCompass，根据网站的类别提供默认消息。例如，如果您经营一个与技术相关的网站：

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompass 支持以下类别，可以通过 `AdCompass.SiteCategories` 访问：

```typescript
enum AdCompassSiteCategories {
  newsSite, // 新闻网站
  entertainmentSite, // 娱乐网站
  educationalSite, // 教育网站
  lifestyleSite, // 生活方式网站
  technologySite, // 技术网站
}
```

#### 更改消息
您可能希望为您的网站设置自定义消息：

```javascript
const adCompass = new AdCompass({ message: 'Hello, world!' });
adCompass.run();
```

#### 更改通知位置
您可能希望更改通知的位置，默认设置为顶部居中：

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompass 支持以下位置，可以通过 `AdCompass.NotificationPosition` 访问：

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

#### 调整页面加载后通知出现的时间

您可以调整通知出现的时间（以毫秒为单位）。默认是 7 秒：

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

### 选项

以下是可用选项列表：

```typescript
type AdCompassOptions = {
  delay: number; // 通知出现的时间（毫秒）
  category: AdCompassSiteCategories; // 网站类别
  position: AdCompassNotificationPosition; // 通知位置
  message?: string; // 自定义消息
  daySpan: number; // 通知重新出现的间隔时间（天）
};
```

## 最后

AdCompass 支持使用广告拦截器的用户和寻求变现其网站的媒体，希望使网络成为双方更好的地方！