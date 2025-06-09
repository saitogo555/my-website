import type { WorkData } from "../types";

const BASE_IMAGE_PATH = "/images/works/discord-readme-bot";

export const DISCORD_README_BOT: WorkData = {
  id: "discord-readme-bot",
  title: "Discord Readme Bot",
  summary: "メッセージの既読管理とリマインドを行うDiscord Bot",
  details: [
    "Discordサーバーでメッセージの既読管理とリマインド機能を提供するBotの開発。",
    "メンションされたメッセージに自動で👀リアクションを追加し、簡単に既読確認ができます。",
    "管理者は誰が既読・未読なのかを一目で確認でき、未読者に一括でDMリマインダーを送信可能。",
    "TypeScriptとDiscord.jsを使用して開発し、型安全性と保守性を重視した設計。",
  ],
  thumbnail: {
    title: "Discord Readme Bot",
    src: `${BASE_IMAGE_PATH}/discord-readme-bot.webp`,
    thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot_thumb.webp`,
  },
  roles: ["バックエンド"],
  technologies: [
    { name: "TypeScript", iconSrc: "/images/logo/typescript-logo.svg" },
  ],
  links: [
    "https://github.com/saitogo555/discord-readme-bot",
    "https://zenn.dev/saitogo/articles/8259eee6afc437",
  ],
  images: [
    {
      title: "既読対象メッセージ",
      src: `${BASE_IMAGE_PATH}/discord-readme-bot-message.webp`,
      thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot-message_thumb.webp`,
    },
    {
      title: "既読・未読チェック 「/readme check <message_id>」",
      src: `${BASE_IMAGE_PATH}/discord-readme-bot-check.webp`,
      thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot-check_thumb.webp`,
    },
    {
      title: "リマインド送信 「/readme remind <message_id>」",
      src: `${BASE_IMAGE_PATH}/discord-readme-bot-remind.webp`,
      thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot-remind_thumb.webp`,
    },
    {
      title: "リマインドメッセージ",
      src: `${BASE_IMAGE_PATH}/discord-readme-bot-remind-message.webp`,
      thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot-remind-message_thumb.webp`,
    },
    {
      title: "使い方コマンド 「/readme usage」",
      src: `${BASE_IMAGE_PATH}/discord-readme-bot-usage.webp`,
      thumbnailSrc: `${BASE_IMAGE_PATH}/discord-readme-bot-usage_thumb.webp`,
    },
  ],
};
