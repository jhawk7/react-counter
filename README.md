# React Counter ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
This simple mobile app fires off events to an MQTT server to store the number of times the displayed button has been pressed. The count is also displayed on the button itself and persists after the app is closed. This project was birthed out of the desire to play around with the MQTT protocol while also building an android app with react-native. The `backend` for this application as well as the setup for the `MQTT docker instance` can be found in the repo [here](https://github.com/jhawk7/go-counter-backend).

**Updated Events**
- press button to `increment` counter
- long press to `decrement` counter
- prese "Reset" to `reset` counter to 0

## Deployment
- install eas with npx and setup `eas.json` file with with env vars
- run `apk` npm script to build apk for androidn
