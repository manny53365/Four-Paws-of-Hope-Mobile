# Quick Start Guide - Run the App

## Prerequisites
1. Android emulator must be running OR physical device connected
2. Metro bundler will start automatically

## Option 1: Run Everything Automatically

```bash
cd Four-Paws-of-Hope-Mobile
./run-app.sh
```

## Option 2: Manual Steps

### Terminal 1: Start Metro Bundler
```bash
cd Four-Paws-of-Hope-Mobile
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
npm start
```

### Terminal 2: Run Android App
```bash
cd Four-Paws-of-Hope-Mobile
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
npm run android
```

## If Emulator is Not Running

1. Open Android Studio
2. Go to Tools > Device Manager
3. Click the Play button next to an emulator
4. Wait for it to boot
5. Then run the app

## Troubleshooting

- **Blank screen?** Shake device/emulator → Select "Reload"
- **Metro not connecting?** Run: `adb reverse tcp:8081 tcp:8081`
- **Build fails?** Run: `cd android && ./gradlew clean && cd ..`









