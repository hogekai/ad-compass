import i18next from "i18next";

i18next.init({
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
        Close: "閉じる"
      },
    },
  },
});

i18next.changeLanguage(navigator?.language || "en");

export const i18n = i18next;
