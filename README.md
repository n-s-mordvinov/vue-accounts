## Демо
- https://n-s-mordvinov.github.io/vue-accounts/

# Начало работы с Vue 3 и Vite

Этот шаблон поможет вам начать разработку на Vue 3 в среде Vite.

## Рекомендуемая настройка IDE

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (отключите Vetur).

## Рекомендуемая настройка браузера

- Браузеры на основе Chromium (Chrome, Edge, Brave и др.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Включите Custom Object Formatter в Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/ru/firefox/addon/vue-js-devtools/)
  - [Включите Custom Object Formatter в Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Поддержка типов для импортов `.vue` в TypeScript

TypeScript по умолчанию не может обрабатывать информацию о типах для импортов `.vue`, поэтому мы заменяем CLI `tsc` на `vue-tsc` для проверки типов. В редакторах кода нам нужен [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), чтобы служба языка TypeScript понимала типы `.vue` файлов.

## Настройка конфигурации

См. [Справочник по конфигурации Vite](https://vite.dev/config/).

## Настройка проекта

```sh
npm install