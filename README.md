# AdCompass: A Friendly Approach to Ad Blocking

AdCompass - A Friendly Approach to Ad Blocking | 広告ブロックへの優しい対応

AdCompass は I18n に対応しており、日本人向けの README があります。是非！
<a href="./docs/ja/README.md">日本語 README</a>

## 👀 Problem

### Overview of the Issue:

In the digital economy, many websites heavily rely on advertising revenue. However, a significant percentage of web users utilize ad blockers, leading to substantial revenue losses, especially for media sites and content creators. Many users are not fully aware of how their choice to block ads affects the availability and quality of content.

### Data and Feedback:

Industry studies indicate that about 25-30% of web users employ ad-blocking tools. For some websites, this can result in revenue losses amounting to hundreds of thousands of dollars annually.

### Cooperation from Clients:

Based on feedback from multiple publishers and major media sites, they are urgently seeking ways to recover advertising revenue.

### Urgency of the Issue:

With the growth of digital advertising, the negative impacts of ad blocking are increasing. Finding a sustainable revenue model is crucial to continue providing high-quality creative content.

## 💭 Suggestion

### Introduction to AdCompass

AdCompass is a library designed to engage users who have ad blockers enabled. It displays customizable, polite notifications that gently encourage users to disable their ad blockers and support the site's revenue.

### **Alternatives and Reasons for Selection**:

- **Warning Pop-Ups**: Can create a negative user experience by feeling coercive.
- **Paid Subscription Model**: Often met with reluctance to pay by users, resulting in low conversion rates.

The reason for choosing notifications is their friendly approach while educating users about the importance of ads.

## 🚀 Getting Started

- We do not support the node.js environment.

```bash
npm i ad-compass
```

Once the package is installed, you can import the library using the import statement.

```javascript
import AdCompass from "ad-compass";
```

Execute the script.

```javascript
const adCompass = new AdCompass();
adCompass.run();
```

That's it!

Or, using CDN

Set up the script.

```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

Execute the script.

```html
<script>
  const adCompass = new AdCompass();
  adCompass.run();
</script>
```

That's it!

### Customize Notifications

#### Categories

You can change the messages displayed depending on the category of your site!
For example, suppose you are running a technology-related site.

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

That's it!

AdCompass supports the following categories, which you can access via AdCompass.SiteCategories.

```typescript
enum AdCompassSiteCategories {
  newsSite, // News site
  entertainmentSite, // Entertainment site
  educationalSite, // Educational site
  lifestyleSite, // Lifestyle site
  technologySite, // Technology site
}
```

#### Change Messages

Alternatively, you might want to set a custom message for your site.

```javascript
const adCompass = new AdCompass({ message: 'Hello, world!' });
adCompass.run();
```

That's it!

#### Change Notification Position

If you want to change the position of the notifications, which are by default set to TopCenter.

```javascript
const adCompass = new AdCompass({
  position: AdCompass.NotificationPosition.TopLeft,
});
adCompass.run();
```

That's it!

AdCompass supports the following positions, which you can access via AdCompass.NotificationPosition.

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

## Finally

AdCompass supports both users who use ad blockers and media looking to monetize their sites, hoping to make the web a better place for both!
