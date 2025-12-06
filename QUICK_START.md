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
# Set up port forwarding for Metro (port 9088)
adb reverse tcp:9088 tcp:9088
npm run android
```

## If Emulator is Not Running

1. Open Android Studio
2. Go to Tools > Device Manager
3. Click the Play button next to an emulator
4. Wait for it to boot
5. Then run the app

## Troubleshooting

- **Blank screen?** 
  - Shake device/emulator → Select "Reload"
  - Check Metro bundler is running: `curl http://localhost:9088/status`
  - Verify port forwarding: `adb reverse --list`
  - Check Android logcat for errors: `adb logcat | grep -i "react\|error"`
  
- **Metro not connecting?** 
  - Set up port forwarding: `adb reverse tcp:9088 tcp:9088`
  - Ensure Metro is running on port 9088: `npm start`
  - Check if port is already in use: `lsof -i :9088`
  
- **Build fails?** 
  - Clean build: `cd android && ./gradlew clean && cd ..`
  - Clear Metro cache: `npm start -- --reset-cache`
  
- **React version mismatch errors?**
  - Ensure React version matches React Native: `react@19.1.0` for React Native 0.81.4
  - Run `npm install` to sync dependencies









