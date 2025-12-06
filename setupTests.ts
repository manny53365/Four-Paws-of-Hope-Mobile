/**
 * Test setup file for Four Paws of Hope Mobile
 * Configures mocks and test utilities
 */

// Mock React Native Animated - removed as it's not needed for basic tests

// Mock Firebase
jest.mock('./firebase/config', () => ({
  projectFirestore: {},
  projectAuth: {
    onAuthStateChanged: jest.fn(() => jest.fn()),
    currentUser: null,
  },
  projectStorage: {},
  timestamp: {
    now: jest.fn(() => ({ seconds: Date.now() / 1000 })),
    fromDate: jest.fn((date) => ({ seconds: date.getTime() / 1000 })),
  },
}));

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn((x) => x),
    Directions: {},
  };
});

// Silence console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

