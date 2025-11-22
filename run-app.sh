#!/bin/bash

# Four Paws of Hope - Android App Runner
# This script sets up and runs the Android app with Metro bundler

set -e

cd "$(dirname "$0")"

echo "🚀 Starting Four Paws of Hope Mobile App"
echo "========================================"
echo ""

# Step 1: Set environment variables
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/emulator

echo "✅ Step 1/6: Environment variables set"

# Step 2: Kill existing Metro processes
echo "✅ Step 2/6: Cleaning up existing processes..."
pkill -f "react-native start" 2>/dev/null || true
pkill -f "metro" 2>/dev/null || true
sleep 2

# Step 3: Start Metro bundler in background
echo "✅ Step 3/6: Starting Metro bundler..."
npm start > /tmp/metro-bundler.log 2>&1 &
METRO_PID=$!
sleep 10

# Check if Metro started
if curl -s http://localhost:8081/status > /dev/null 2>&1; then
    echo "   ✓ Metro bundler running on http://localhost:8081"
else
    echo "   ⚠️  Metro bundler may still be starting..."
fi

# Step 4: Check for Android device/emulator
echo "✅ Step 4/6: Checking for Android device/emulator..."
if adb devices | grep -q "device$"; then
    echo "   ✓ Android device/emulator found"
    DEVICE_READY=true
else
    echo "   ⚠️  No Android device/emulator found"
    echo "   Attempting to start emulator..."
    
    # Try to list and start an emulator
    if command -v emulator > /dev/null 2>&1; then
        AVD_LIST=$(emulator -list-avds | head -1)
        if [ -n "$AVD_LIST" ]; then
            echo "   Starting emulator: $AVD_LIST"
            emulator -avd "$AVD_LIST" > /tmp/emulator.log 2>&1 &
            echo "   Waiting for emulator to boot (this may take 1-2 minutes)..."
            
            # Wait for emulator
            for i in {1..60}; do
                if adb devices | grep -q "device$"; then
                    echo "   ✓ Emulator is ready"
                    DEVICE_READY=true
                    break
                fi
                sleep 2
                echo -n "."
            done
            echo ""
        else
            echo "   ❌ No AVD found. Please create an emulator in Android Studio."
            DEVICE_READY=false
        fi
    else
        echo "   ❌ Emulator command not found. Please start an emulator manually."
        DEVICE_READY=false
    fi
fi

if [ "$DEVICE_READY" != "true" ]; then
    echo ""
    echo "❌ Cannot proceed without Android device/emulator"
    echo "Please:"
    echo "  1. Start an Android emulator from Android Studio, OR"
    echo "  2. Connect a physical Android device via USB"
    echo ""
    echo "Then run this script again."
    kill $METRO_PID 2>/dev/null || true
    exit 1
fi

# Step 5: Set up port forwarding
echo "✅ Step 5/6: Setting up port forwarding..."
adb reverse tcp:8081 tcp:8081
echo "   ✓ Port forwarding configured"

# Step 6: Build and run the app
echo "✅ Step 6/6: Building and installing app..."
echo "   This may take 1-2 minutes..."
npm run android

echo ""
echo "========================================"
echo "✅ App setup complete!"
echo ""
echo "The Dashboard app should now be visible on your device/emulator."
echo ""
echo "If you see a blank screen:"
echo "  - Shake the device/emulator (or press Cmd+M on Mac)"
echo "  - Select 'Reload' from the dev menu"
echo ""
echo "Metro bundler is running in the background."
echo "To stop Metro, run: pkill -f 'react-native start'"
echo ""









