# AdCompass: A Friendly Approach to Ad Blocking

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

AdCompass is a library designed to engage users who have ad blockers enabled. It displays customizable, I18n-compatible, polite notifications that gently encourage users to disable their ad blockers and support the site's revenue.

### **Alternatives and Reasons for Selection**:

- **Warning Pop-Ups**: Can create a negative user experience by feeling coercive.
- **Paid Subscription Model**: Often met with reluctance to pay by users, resulting in low conversion rates.

The reason for choosing notifications is their friendly approach while educating users about the importance of ads.

## 📚 Compatibility

Confirmed Ad Blockers:

- AdBlock
- AdGuard
- Brave Shield

Supported Languages:

- English
- Japanese
- Spanish
- Chinese
- French
- German

## 🚀 Getting Started

* We do not support the node.js environment.

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

#### Default Messages by Category

At AdCompass, default messages are provided according to the category of the site. For instance, if you operate a technology-related site:

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompass supports the following categories, which can be accessed through `AdCompass.SiteCategories`:

```typescript
enum AdCompassSiteCategories {
  newsSite, // News site
  entertainmentSite, // Entertainment site
  educationalSite, // Educational site
  lifestyleSite, // Lifestyle site
  technologySite, // Technology site
}
```

#### Changing the Message

You may want to set a custom message for your site:

```javascript
const adCompass = new AdCompass({ message: 'Hello, world!' });
adCompass.run();
```

#### Changing the Notification Position

You might want to change the position of the notification, which is set to TopCenter by default:

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompass supports the following positions, accessible via `AdCompass.NotificationPosition`:

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

#### Adjust the time until the notification is displayed after the page is loaded
You can adjust the time until the notification is displayed in milliseconds.
The default is 7 seconds.

```javascript
const adCompass = new AdCompass({ delay: 1000 });
adCompass.run();
```

#### Adjust the span until the notification is displayed again on the same site
To avoid stressing the user with the same notification, you can adjust the span (in days) until it is displayed again.
The default is 7 days.

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

#### Options
Here is a list of available options.

```javascript
type AdCompassOptions = {
delay: number; // Time until the notification is displayed (in milliseconds)
category: AdCompassSiteCategories; // Site category
position: AdCompassNotificationPosition; // Notification position
message?: string; // Custom message
daySpan: number; // Span until the notification is displayed again (in days)
};
```

## Finally

AdCompass supports both users who use ad blockers and media looking to monetize their sites, hoping to make the web a better place for both!