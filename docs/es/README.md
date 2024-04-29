# AdCompass: Un Enfoque Amigable para el Bloqueo de Anuncios

## 👀 Problema

### Visión General del Problema:

En la economía digital, muchos sitios web dependen en gran medida de los ingresos publicitarios. Sin embargo, un porcentaje significativo de usuarios de Internet utiliza bloqueadores de anuncios, lo que lleva a pérdidas sustanciales de ingresos, especialmente para sitios de medios y creadores de contenido. Muchos usuarios no son completamente conscientes de cómo su decisión de bloquear anuncios afecta la disponibilidad y calidad del contenido.

### Datos y Retroalimentación:

Estudios de la industria indican que aproximadamente el 25-30% de los usuarios de Internet utilizan herramientas de bloqueo de anuncios. Para algunos sitios web, esto puede resultar en pérdidas de ingresos que ascienden a cientos de miles de dólares anualmente.

### Cooperación de los Clientes:

Basándose en la retroalimentación de varios editores y principales sitios de medios, están buscando urgentemente formas de recuperar ingresos publicitarios.

### Urgencia del Problema:

Con el crecimiento de la publicidad digital, los impactos negativos del bloqueo de anuncios están aumentando. Encontrar un modelo de ingresos sostenible es crucial para continuar proporcionando contenido creativo de alta calidad.

## 💭 Sugerencia

### Introducción a AdCompass

AdCompass es una biblioteca diseñada para interactuar con usuarios que tienen activados los bloqueadores de anuncios. Muestra notificaciones personalizables y educadas, compatibles con I18n, que animan suavemente a los usuarios a desactivar sus bloqueadores de anuncios y apoyar los ingresos del sitio.

### **Alternativas y Razones para la Selección**:

- **Pop-Ups de Advertencia**: Pueden crear una experiencia de usuario negativa al sentirse coercitivos.
- **Modelo de Suscripción de Pago**: A menudo se encuentra con la reticencia a pagar por parte de los usuarios, lo que resulta en tasas de conversión bajas.

La razón para elegir las notificaciones es su enfoque amigable mientras se educa a los usuarios sobre la importancia de los anuncios.

## 📚 Compatibilidad

Bloqueadores de Anuncios Confirmados:

- AdBlock
- AdGuard
- Escudo de Brave

Idiomas Soportados:

- Inglés
- Japonés
- Español
- Chino
- Francés
- Alemán

## 🚀 Empezando

* No admitimos el entorno node.js.

```bash
npm i ad-compass
```

Una vez instalado el paquete, puedes importar la biblioteca usando la declaración de importación.

```javascript
import AdCompass from "ad-compass";
```

Ejecuta el script.

```javascript
const adCompass = new AdCompass();
adCompass.run();
```

¡Eso es todo!

O, usando CDN

Configura el script.

```html
<script src="https://cdn.jsdelivr.net/npm/ad-compass@latest/dist/ad-compass.umd.js"></script>
```

Ejecuta el script.

```html
<script>
const adCompass = new AdCompass();
adCompass.run();
</script>
```

¡Eso es todo!

### Personalizar Notificaciones

#### Mensajes Predeterminados por Categoría

En AdCompass, se proporcionan mensajes predeterminados según la categoría del sitio. Por ejemplo, si operas un sitio relacionado con la tecnología:

```javascript
const adCompass = new AdCompass({ category: AdCompass.SiteCategories.technologySite });
adCompass.run();
```

AdCompass admite las siguientes categorías, a las que se puede acceder a través de `AdCompass.SiteCategories`:

```typescript
enum AdCompassSiteCategories {
  newsSite, // Sitio de noticias
  entertainmentSite, // Sitio de entretenimiento
  educationalSite, // Sitio educativo
  lifestyleSite, // Sitio de estilo de vida
  technologySite, // Sitio tecnológico
}
```

#### Cambiando el Mensaje

Puedes querer establecer un mensaje personalizado para tu sitio:

```javascript
const adCompass = new AdCompass({ message: '¡Hola, mundo!' });
adCompass.run();
```

#### Cambiando la Posición de la Notificación

Quizás quieras cambiar la posición de la notificación, que por defecto está establecida en TopCenter:

```javascript
const adCompass = new AdCompass({ position: AdCompass.NotificationPosition.topLeft });
adCompass.run();
```

AdCompass admite las siguientes posiciones, accesibles a través de `AdCompass.NotificationPosition`:

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

### Ajustando el Tiempo Hasta que Aparece la Notificación Después de la Carga de la Página

Puedes ajustar el tiempo hasta que aparece la notificación en milisegundos. El predeterminado es de 7 segundos:

```javascript
const adCompass = new AdCompass({ daySpan: 1, });
adCompass.run();
```

### Opciones

Aquí tienes una lista de opciones disponibles:

```javascript
type AdCompassOptions = {
  delay: number; // Tiempo hasta que aparece la notificación (en milisegundos)
  category: AdCompassSiteCategories; // Categoría del sitio
  position: AdCompassNotificationPosition; // Posición de la notificación
  message?: string; // Mensaje personalizado
  daySpan: number; // Intervalo hasta que la notificación reaparece (en días)
};
```

## Finalmente

¡AdCompass apoya tanto a los usuarios que utilizan bloqueadores de anuncios como a los medios que buscan monetizar sus sitios, con la esperanza de hacer de la web un lugar mejor para todos!

