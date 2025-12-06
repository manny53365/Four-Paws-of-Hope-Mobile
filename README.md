# Four Paws of Hope Mobile App

A mobile application for helping animals in need and connecting them with loving families 

## Quick Start

**Important:** Make sure you're in the `Four-Paws-of-Hope-Mobile` directory before running commands.

```bash
# Navigate to the mobile app directory
cd Four-Paws-of-Hope-Mobile

# Install dependencies
npm install

# Start Metro bundler
npm start

# In a separate terminal, run on Android
npm run android

# Or run on iOS
npm run ios

# Run tests
npm test
```

## About

Four Paws of Hope helps reunite lost pets with their owners through a community driven mobile platform 

## Tech Stack

- React Native 0.81.4
- React 19.1.0
- TypeScript

## Prerequisites

- Node.js >= 20
- Android Studio (for Android)
- Xcode (for iOS)

## Development

### Metro Bundler Configuration

Metro bundler runs on [http://localhost:9088](http://localhost:9088)

**Important:** This project uses a custom Metro port (9088) instead of the default 8081. This is configured in:
- `package.json` - `start` script uses `--port 9088`
- `package.json` - `android` script sets `RCT_METRO_PORT=9088`
- `android/gradle.properties` - Contains `RCT_METRO_PORT=9088`

### Setting Up Port Forwarding (Android)

Before running the Android app, set up port forwarding:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
adb reverse tcp:9088 tcp:9088
```

Or use the automated script:
```bash
./run-app.sh
```

This script automatically:
- Starts Metro on port 9088
- Sets up port forwarding
- Builds and runs the app 