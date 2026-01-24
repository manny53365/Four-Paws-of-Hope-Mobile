import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, useColorScheme, ActivityIndicator, ScrollView } from "react-native";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [fName, setfName] = useState<string>('');
  const [lName, setlName] = useState<string>('');
  const [phone, setPhone] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [pfp, setPfp] = useState<string | null>(null);
  const [pfpError, setpfpError] = useState<string | null>(null);
  const { signup, isPending, error } = useSignup();

  const pickImage = async () => {
    // For React Native, image picking would require a library like react-native-image-picker
    // For now, we'll just show an alert that this feature needs to be implemented
    Alert.alert(
      "Profile Photo",
      "Image picker functionality requires react-native-image-picker library. Please implement image selection based on your project setup.",
      [{ text: "OK" }]
    );
    // TODO: Implement image picker using react-native-image-picker or similar library
  };

  const handleSubmit = async (): Promise<void> => {
    if (pfpError) return;
    if (!email || !password || !displayName || !fName || !lName || !phone || !address) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }
    await signup({ email, password, displayName, fName, lName, phone, address, pfp });
  };

  const styles = getStyles(isDark);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Email"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Password"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Display Name"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={fName}
            onChangeText={setfName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last Name"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={lName}
            onChangeText={setlName}
            autoCapitalize="words"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Phone Number"
            placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            autoComplete="tel"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Physical Address (Street, City, State, Postal Code)"
          placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.imageButtonText}>Set Profile Photo</Text>
        </TouchableOpacity>
        {pfpError && <Text style={styles.errorText}>{pfpError}</Text>}

        {!isPending && (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        )}

        {isPending && (
          <TouchableOpacity style={[styles.button, styles.buttonDisabled]} disabled>
            <ActivityIndicator color="#ffffff" />
            <Text style={styles.buttonText}>Loading...</Text>
          </TouchableOpacity>
        )}

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDark ? '#111827' : '#f9fafb',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#1f2937',
    marginBottom: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  input: {
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    borderWidth: 1,
    borderColor: isDark ? '#4b5563' : '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: isDark ? '#ffffff' : '#1f2937',
    flex: 1,
  },
  halfInput: {
    flex: 1,
  },
  imageButton: {
    backgroundColor: isDark ? '#374151' : '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageButtonText: {
    color: isDark ? '#ffffff' : '#1f2937',
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#fee2e2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 14,
    textAlign: 'center',
  },
});

