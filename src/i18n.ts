import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next.use(I18nextBrowserLanguageDetector).init({
  debug: false,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        newsSite:
          "Thank you for being a valued reader! Our site is supported by advertising. Could you kindly disable your ad blocker to help support our journalism? This message will close in 10 seconds. We deeply appreciate your support!",
        entertainmentSite:
          "Enhance your fun! Please consider pausing your ad blocker to support creative content creation. This message will disappear shortly. Thank you for your support!",
        educationalSite:
          "Would you join us on our journey of learning by disabling your ad blocker? Your support helps spread knowledge. This notification will automatically close in 10 seconds. Thank you for your cooperation!",
        lifestyleSite:
          "Can you help us keep bringing you the latest trends by turning off your ad blocker? Your support allows us to continue providing great content. This message will vanish in 10 seconds. We appreciate your understanding!",
        technologySite:
          "Support technological advancement by disabling your ad blocker. Your help paves the way for more innovation. This notice will soon disappear. Thank you for your assistance!",
        Close: "Close",
      },
    },
    ja: {
      translation: {
        newsSite:
          "いつもご利用いただきありがとうございます！ 当サイトは広告収入によって運営されています。広告ブロックを一時的に解除していただくことで、引き続き質の高いコンテンツをお届けするサポートをしていただけると幸いです。このメッセージは自動的に消えます。ご協力ありがとうございます！",
        entertainmentSite:
          "楽しい時間をもっと楽しく！広告ブロックを一時的に停止して、クリエイティブなコンテンツ作成を支援してください。このメッセージはすぐに消えます。ありがとうございます！",
        educationalSite:
          "学びの旅を共に歩むために、広告ブロックを解除していただけませんか？あなたのサポートが知識の拡散に役立ちます。この通知は10秒後に自動的に閉じます。ご協力に感謝いたします。",
        lifestyleSite:
          "最新のトレンドをお届けするために、広告ブロックの解除をお願いできますか？サポートにより素敵なコンテンツを提供し続けられます。10秒後にこのメッセージは消えます。ご理解ありがとうございます!",
        technologySite:
          "テクノロジーの進化をサポートしてください。広告ブロックを解除することで、更なるイノベーションへの道を開きます。この通知は間もなく消えます。ご協力に感謝します！",
        Close: "閉じる",
      },
    },
    es: {
      translation: {
        newsSite:
          "¡Gracias por ser un lector valioso! Nuestro sitio se mantiene gracias a la publicidad. ¿Podría desactivar su bloqueador de anuncios para seguir apoyando nuestro periodismo? Este mensaje se cerrará en 10 segundos. ¡Apreciamos mucho su apoyo!",
        entertainmentSite:
          "¡Mejore su diversión! Considere pausar su bloqueador de anuncios para apoyar la creación de contenido creativo. Este mensaje desaparecerá en breve. ¡Gracias por su apoyo!",
        educationalSite:
          "¿Nos acompañaría en nuestro viaje de aprendizaje desactivando su bloqueador de anuncios? Su apoyo ayuda a difundir el conocimiento. Esta notificación se cerrará automáticamente en 10 segundos. ¡Gracias por su cooperación!",
        lifestyleSite:
          "¿Podría ayudarnos a seguir trayéndole las últimas tendencias desactivando su bloqueador de anuncios? Su apoyo nos permite continuar proporcionando excelente contenido. Este mensaje desaparecerá en 10 segundos. ¡Apreciamos su comprensión!",
        technologySite:
          "Apoye el avance tecnológico desactivando su bloqueador de anuncios. Su ayuda allana el camino para más innovación. Este aviso desaparecerá pronto. ¡Gracias por su ayuda!",
        Close: "Cerrar",
      },
    },
    zh: {
      translation: {
        newsSite:
          "感谢您成为我们尊贵的读者！我们的网站通过广告支持。您能否暂时禁用您的广告拦截器以支持我们的新闻工作？此消息将在10秒后关闭。我们非常感谢您的支持！",
        entertainmentSite:
          "增强您的乐趣！请考虑暂停您的广告拦截器以支持创意内容的创建。此消息很快会消失。谢谢您的支持！",
        educationalSite:
          "您能加入我们的学习旅程，通过禁用广告拦截器来支持吗？您的支持有助于传播知识。这个通知将在10秒后自动关闭。谢谢您的合作！",
        lifestyleSite:
          "您能帮助我们通过关闭广告拦截器继续带来最新趋势吗？您的支持使我们能继续提供优质内容。这条消息将在10秒后消失。我们感谢您的理解！",
        technologySite:
          "通过禁用您的广告拦截器来支持技术进步。您的帮助为更多创新铺平了道路。这个通知很快会消失。感谢您的帮助！",
        Close: "关闭",
      },
    },
    fr: {
      translation: {
        newsSite:
          "Merci d'être un lecteur précieux ! Notre site est soutenu par la publicité. Pourriez-vous désactiver votre bloqueur de publicités pour continuer à soutenir notre journalisme ? Ce message se fermera dans 10 secondes. Nous apprécions grandement votre soutien !",
        entertainmentSite:
          "Améliorez votre plaisir ! Veuillez considérer de mettre en pause votre bloqueur de publicités pour soutenir la création de contenu créatif. Ce message disparaîtra bientôt. Merci de votre soutien !",
        educationalSite:
          "Nous rejoindriez-vous dans notre voyage d'apprentissage en désactivant votre bloqueur de publicités ? Votre soutien aide à la diffusion du savoir. Cette notification se fermera automatiquement dans 10 secondes. Merci de votre coopération !",
        lifestyleSite:
          "Pourriez-vous nous aider à continuer de vous apporter les dernières tendances en désactivant votre bloqueur de publicités ? Votre soutien nous permet de continuer à fournir un excellent contenu. Ce message disparaîtra dans 10 secondes. Nous apprécions votre compréhension !",
        technologySite:
          "Soutenez l'avancement technologique en désactivant votre bloqueur de publicités. Votre aide ouvre la voie à plus d'innovation. Cet avis disparaîtra bientôt. Merci de votre aide !",
        Close: "Fermer",
      },
    },
    de: {
      translation: {
        newsSite:
          "Vielen Dank, dass Sie ein geschätzter Leser sind! Unsere Seite wird durch Werbung unterstützt. Könnten Sie Ihren Ad-Blocker deaktivieren, um unseren Journalismus weiter zu unterstützen? Diese Nachricht schließt sich in 10 Sekunden. Wir schätzen Ihre Unterstützung sehr!",
        entertainmentSite:
          "Steigern Sie Ihren Spaß! Bitte erwägen Sie, Ihren Ad-Blocker zu pausieren, um die Erstellung kreativer Inhalte zu unterstützen. Diese Nachricht verschwindet bald. Danke für Ihre Unterstützung!",
        educationalSite:
          "Würden Sie uns auf unserer Lernreise begleiten, indem Sie Ihren Ad-Blocker deaktivieren? Ihre Unterstützung hilft, Wissen zu verbreiten. Diese Benachrichtigung schließt sich automatisch in 10 Sekunden. Vielen Dank für Ihre Kooperation!",
        lifestyleSite:
          "Können Sie uns helfen, Ihnen weiterhin die neuesten Trends zu bringen, indem Sie Ihren Ad-Blocker ausschalten? Ihre Unterstützung ermöglicht es uns, weiterhin großartige Inhalte zu liefern. Diese Nachricht verschwindet in 10 Sekunden. Wir schätzen Ihr Verständnis!",
        technologySite:
          "Unterstützen Sie den technologischen Fortschritt, indem Sie Ihren Ad-Blocker deaktivieren. Ihre Hilfe ebnet den Weg für mehr Innovation. Diese Mitteilung wird bald verschwinden. Danke für Ihre Hilfe!",
        Close: "Schließen",
      },
    },
  },
});

export const i18n = i18next;
