# AdCompass: Ein freundlicher Ansatz zur Werbeblockierung

## 👀 Problem

### Überblick über das Thema:

In der digitalen Wirtschaft sind viele Websites stark von Werbeeinnahmen abhängig. Allerdings nutzen einen erheblichen Prozentsatz der Webnutzer Werbeblocker, was zu erheblichen Einnahmeverlusten führt, insbesondere für Medienwebsites und Inhaltskreateure. Viele Nutzer sind sich nicht vollständig bewusst, wie ihre Entscheidung, Werbung zu blockieren, die Verfügbarkeit und Qualität der Inhalte beeinflusst.

### Daten und Feedback:

Branchenstudien zeigen, dass etwa 25-30% der Webnutzer Werbeblockierungstools verwenden. Für einige Websites kann dies zu Einnahmeverlusten in Höhe von Hunderttausenden Dollar jährlich führen.

### Zusammenarbeit mit Kunden:

Basierend auf dem Feedback mehrerer Verleger und großer Medienwebsites suchen diese dringend nach Möglichkeiten, die Werbeeinnahmen zurückzugewinnen.

### Dringlichkeit des Problems:

Mit dem Wachstum der digitalen Werbung nehmen die negativen Auswirkungen von Werbeblockern zu. Es ist entscheidend, ein nachhaltiges Einnahmemodell zu finden, um weiterhin hochwertige kreative Inhalte bereitzustellen.

## 💭 Vorschlag

### Vorstellung von AdCompass

AdCompass ist eine Bibliothek, die darauf ausgelegt ist, Nutzer, die Werbeblocker aktiviert haben, anzusprechen. Sie zeigt anpassbare, I18n-kompatible, höfliche Benachrichtigungen, die die Nutzer sanft dazu anregen, ihre Werbeblocker zu deaktivieren und die Einnahmen der Website zu unterstützen.

### **Alternativen und Gründe für die Auswahl**:

- **Warnhinweise**: Können ein negatives Benutzererlebnis schaffen, da sie zwanghaft wirken können.
- **Bezahltes Abonnementmodell**: Oft mit der Zurückhaltung der Nutzer konfrontiert zu zahlen, was zu niedrigen Konversionsraten führt.

Der Grund für die Wahl von Benachrichtigungen ist ihr freundlicher Ansatz, während sie die Nutzer über die Wichtigkeit von Werbung aufklären.

## 📚 Kompatibilität

Bestätigte Werbeblocker:

- AdBlock
- AdGuard
- Brave Shield

Unterstützte Sprachen:

- Englisch
- Japanisch
- Spanisch
- Chinesisch
- Französisch
- Deutsch

## 🚀 Erste Schritte

* Wir unterstützen die node.js-Umgebung nicht.

```bash
npm i ad-compass
```

Nach der Installation des Pakets können Sie die Bibliothek mit der Importanweisung importieren.

```javascript
import AdCompass from "ad-compass";
```

Führen Sie das Skript aus.

```javascript
const adCompass = new AdCompass();
adCompass.run();
```

Das war's!

Oder, mit CDN

Richten Sie das Skript ein.

```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

Führen Sie das Skript aus.

```html
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

Das war's!

### Benachrichtigungen anpassen

#### Standardnachrichten nach Kategorie

Bei AdCompass werden standardmäßig Nachrichten gemäß der Kategorie der Website bereitgestellt. Zum Beispiel, wenn Sie eine technologiebezogene Website betreiben:

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompass unterstützt die folgenden Kategorien, auf die über `AdCompass.SiteCategories` zugegriffen werden kann:

```typescript
enum AdCompassSiteCategories {
  newsSite, // Nachrichtenwebsite
  entertainmentSite, // Unterhaltungswebsite
  educationalSite, // Bildungswebsite
  lifestyleSite, // Lifestyle-Website
  technologySite, // Technologie-Website
}
```

#### Ändern der Nachricht

Sie möchten möglicherweise eine benutzerdefinierte Nachricht für Ihre Website festlegen:

```javascript
const adCompass = new AdCompass({ message: 'Hallo, Welt!' });
adCompass.run();
```

#### Ändern der Position der Benachrichtigung

Möglicherweise möchten Sie die Position der Benachrichtigung ändern, die standardmäßig auf TopCenter eingestellt ist:

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompass unterstützt die folgenden Positionen, die über `AdCompass.NotificationPosition` zugänglich sind:

```typescript
enum AdCompassNotificationPosition {
  topLeft = "oben-links",
  topCenter = "oben-mitte",
  topRight = "oben-rechts",
  bottomLeft = "unten-links",
  bottomCenter = "unten-mitte",
  bottomRight = "unten-rechts",
}
```

#### Zeit bis zur Anzeige der Benachrichtigung nach dem Laden der Seite anpassen
Sie können die Zeit bis zur Anzeige der Benachrichtigung in Millisekunden anpassen.
Der Standardwert beträgt 7 Sekunden.

```javascript
const adCompass = new AdCompass({ delay: 1000 });
adCompass.run();
```

#### Intervall bis zur erneuten Anzeige der Benachrichtigung auf derselben Webseite anpassen
Um den Benutzer nicht mit derselben Benachrichtigung zu belasten, können Sie das Intervall (in Tagen) bis zur erneuten Anzeige anpassen.
Der Standardwert beträgt 7 Tage.

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

#### Optionen
Hier ist eine Liste der verfügbaren Optionen.

```javascript
type AdCompassOptions = {
delay: number; // Zeit bis zur Anzeige der Benachrichtigung (in Millisekunden)
category: AdCompassSiteCategories; // Kategorie der Webseite
position: AdCompassNotificationPosition; // Position der Benachrichtigung
message?: string; // Benutzerdefinierte Nachricht
daySpan: number; // Intervall bis zur erneuten Anzeige der Benachrichtigung (in Tagen)
};
```

## Schließlich

AdCompass unterstützt sowohl Nutzer, die Werbeblocker verwenden, als auch Medien, die ihre Websites monetarisieren möchten, in der Hoffnung, das Web zu einem besseren Ort für beide zu machen!