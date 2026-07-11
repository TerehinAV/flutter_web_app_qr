# telegram_qr_web_app

Serverless Telegram Mini App that scans QR codes. Single-file vanilla
HTML/CSS/JS — no framework, no build step. Hosted on GitHub Pages.

## Features

- Native Telegram WebApp SDK integration (`MainButton`, `BackButton`,
  `HapticFeedback`, `sendData`).
- Adaptive light/dark theming via Telegram CSS variables only
  (`--tg-theme-*`) — zero hardcoded colors inside Telegram.
- Modern, rounded-corner UI in the style of Telegram's native dialogs.
- QR scanning via Telegram's **native** `WebApp.showScanQrPopup` (Bot API 6.4+)
  — no third-party libraries, no `getUserMedia`, full reliability on every
  Telegram client.
- Three states: **placeholder** → **success** / **error**.
- Success: decoded data card + *Copy to Clipboard* + *Send to Chat*
  (`tg.sendData`).
- Error: native `MainButton` repurposed as *Try Again*.
- Lightweight i18n (EN/RU) via the `?lng=en|ru` URL parameter.

## Localization

Append `?lng=ru` or `?lng=en` to the Web App URL. Defaults to `en`.

## Local testing

The scanner uses Telegram's native `showScanQrPopup`, so it only works inside
the Telegram client. Open the Web App URL there to test. Outside Telegram the
app renders an in-app fallback button in place of the native `MainButton`;
pressing it routes to the error state (native scanning is unavailable).

## Notes

- `showScanQrPopup` requires Bot API **6.4+** (Nov 2022). Older clients throw
  `WebAppMethodUnsupported`, which the app surfaces as the error state.
- `tg.sendData` only works for Mini Apps launched from a keyboard button and
  is limited to 4096 bytes. Otherwise the app falls back to copying the data
  and showing an alert.
