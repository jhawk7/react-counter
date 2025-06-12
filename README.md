# React Counter ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=flat&logo=go&logoColor=white)
This simple mobile app fires off events to an MQTT server to store the number of times the displayed button has been pressed. The count is also displayed on the button itself and persists after the app is closed. This project was birthed out of the desire to play around with the MQTT protocol while also building an android app with react-native. The [go-counter-backend](https://github.com/jhawk7/go-counter-backend) repo is the backend for this app, and defines the setup for the `MQTT docker instance`.


![react-counter](https://github.com/user-attachments/assets/5bde7f0d-329b-4568-83d5-b1fb00cdcd26)

**Updated Events**
- press button to `increment` counter
- long press to `decrement` counter
- prese "Reset" to `reset` counter to 0

## Deployment
- install eas with npx and setup `eas.json` file with with env vars
- run `apk` npm script to build apk for androidn
