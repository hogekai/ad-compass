# AdCompass: A Friendly Approach to Ad Blocking

AdCompassはI18nに対応しており、日本人向けのREADMEがあります。是非！
<a href="./docs/ja/README.md">日本語README</a>

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

* node.js environments are not supported.

```
npm i ad-compass
```

Once the package is installed, you can import the library using the import statement.
```
import AdCompass from "ad-compass";
```

Run the script.
```
const adCompass = new AdCompass();
adCompass.run();
```

That's it!

Or, using a CDN

Set up the script.
```
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

Run the script.
```
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

That's it!