# react-counter
This simple mobile app fires off events to an MQTT server to store the number of times the displayed button has been pressed. The count is also displayed on the button itself and persists after the app is closed. This project was birthed out of the desire to play around with the MQTT protocol while also playing with react-native. The backend for this application as well as the setup for the MQTT docker isntance can be found in the repo [here](https://github.com/jhawk7/go-counter-backend).

## Deployment
- install eas with npx and setup `eas.json` file with with env vars
- run `apk` npm script to build apk for androidn
