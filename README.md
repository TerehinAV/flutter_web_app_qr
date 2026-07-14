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

Resolution order:
1. Explicit `?lng=en|ru` URL parameter (override).
2. Telegram client language — `tg.initDataUnsafe.user.language_code`
   (so the Mini App matches the native scanner overlay and the rest of
   the user's Telegram interface).
3. `en` fallback.

The native `showScanQrPopup` overlay title always follows the Telegram
client language and cannot be overridden from the Mini App.

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
- Error messages are differentiated by cause (connection, outdated client,
  generic). Tapping the error icon **5 times** within 1.5 s copies a base64
  diagnostic payload (WebApp version, platform, user agent, error type, raw
  detail) to the clipboard for support. Decode with:
  `echo <base64> | base64 -d | jq`.
