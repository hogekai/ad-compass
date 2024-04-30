# AdCompass : Une approche conviviale du blocage des publicités

## 👀 Problème

### Vue d'ensemble du problème :

Dans l'économie numérique, de nombreux sites web dépendent fortement des revenus publicitaires. Cependant, un pourcentage significatif d'utilisateurs du web utilise des bloqueurs de publicités, entraînant des pertes de revenus considérables, surtout pour les sites de médias et les créateurs de contenu. Beaucoup d'utilisateurs ne sont pas pleinement conscients de l'impact de leur choix de bloquer les publicités sur la disponibilité et la qualité du contenu.

### Données et retours :

Des études du secteur indiquent qu'environ 25-30 % des utilisateurs du web utilisent des outils de blocage de publicités. Pour certains sites web, cela peut entraîner des pertes de revenus se chiffrant à des centaines de milliers de dollars par an.

### Coopération des clients :

Sur la base des retours de plusieurs éditeurs et grands sites médiatiques, ils cherchent de toute urgence des moyens de récupérer les revenus publicitaires.

### Urgence du problème :

Avec la croissance de la publicité numérique, les impacts négatifs du blocage des publicités augmentent. Trouver un modèle de revenus durable est crucial pour continuer à fournir un contenu créatif de haute qualité.

## 💭 Suggestion

### Introduction à AdCompass

AdCompass est une bibliothèque conçue pour engager les utilisateurs qui ont activé des bloqueurs de publicités. Elle affiche des notifications personnalisables, compatibles I18n, polies, qui encouragent doucement les utilisateurs à désactiver leurs bloqueurs de publicités et à soutenir les revenus du site.

### **Alternatives et raisons du choix** :

- **Pop-ups d'avertissement** : Peuvent créer une expérience utilisateur négative en se sentant coercitives.
- **Modèle d'abonnement payant** : Souvent accueilli avec réticence par les utilisateurs, résultant en des taux de conversion faibles.

La raison du choix des notifications est leur approche amicale tout en éduquant les utilisateurs sur l'importance des publicités.

## 📚 Compatibilité

Bloqueurs de publicités confirmés :

- AdBlock
- AdGuard
- Brave Shield

Langues prises en charge :

- Anglais
- Japonais
- Espagnol
- Chinois
- Français
- Allemand

## 🚀 Pour commencer

* Nous ne prenons pas en charge l'environnement node.js.

```bash
npm i ad-compass
```

Une fois le paquet installé, vous pouvez importer la bibliothèque en utilisant l'instruction d'importation.

```javascript
import AdCompass from "ad-compass";
```

Exécutez le script.

```javascript
const adCompass = new AdCompass();
adCompass.run();
```

C'est tout !

Ou, en utilisant CDN

Configurez le script.

```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

Exécutez le script.

```html
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

C'est tout !

### Personnaliser les notifications

#### Messages par défaut par catégorie

Chez AdCompass, des messages par défaut sont fournis selon la catégorie du site. Par exemple, si vous exploitez un site lié à la technologie :

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompass prend en charge les catégories suivantes, accessibles via `AdCompass.SiteCategories` :

```typescript
enum AdCompassSiteCategories {
  newsSite, // Site d'actualités
  entertainmentSite, // Site de divertissement
  educationalSite, // Site éducatif
  lifestyleSite, // Site de style de vie
  technologySite, // Site technologique
}
```

#### Modifier le message

Vous pouvez souhaiter définir un message personnalisé pour votre site :

```javascript
const adCompass = new AdCompass({ message: 'Bonjour, monde !' });
adCompass.run();
```

#### Modifier la position de la notification

Vous pouvez vouloir changer la position de la notification, qui est par défaut en haut au centre :

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompass prend en charge les positions suivantes, accessibles via `AdCompass.NotificationPosition` :

```typescript
enum AdCompassNotificationPosition {
  topLeft = "en haut à gauche",
  topCenter = "en haut au centre",
  topRight = "en haut à droite",
  bottomLeft = "en bas à gauche",
  bottomCenter = "en bas au centre",
  bottomRight = "en bas à droite",
}
```

#### Ajuster le temps avant l'affichage de la notification après le chargement de la page
Vous pouvez ajuster le temps avant l'affichage de la notification en millisecondes.
La valeur par défaut est de 7 secondes.

```javascript
const adCompass = new AdCompass({ delay: 1000 });
adCompass.run();
```

#### Ajuster la fréquence de réapparition de la notification sur le même site
Pour éviter de stresser l'utilisateur avec la même notification, vous pouvez ajuster la fréquence (en jours) avant qu'elle ne réapparaisse.
La valeur par défaut est de 7 jours.

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

#### Options
Voici une liste des options disponibles.

```javascript
type AdCompassOptions = {
delay: number; // Temps avant l'affichage de la notification (en millisecondes)
category: AdCompassSiteCategories; // Catégorie du site
position: AdCompassNotificationPosition; // Position de la notification
message?: string; // Message personnalisé
daySpan: number; // Fréquence de réapparition de la notification (en jours)
};
```

## Enfin
AdCompass soutient à la fois les utilisateurs qui utilisent des bloqueurs de publicités et les médias cherchant à monétiser leurs sites, dans l'espoir de rendre le web meilleur pour tous !