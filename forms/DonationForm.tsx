import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme, ScrollView } from "react-native";

const DonationForm: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const styles = getStyles(isDark);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successTitle}>Thank You!</Text>
        <Text style={styles.successText}>Your donation has been received.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Secure Donation</Text>
        
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="First Name"
                placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Last Name"
                placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Details</Text>
            <View style={styles.paymentPlaceholder}>
              <Text style={styles.paymentPlaceholderText}>Secure card input field</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Complete Your Donation</Text>
          </TouchableOpacity>
          
          <View style={styles.securityContainer}>
            <Text style={styles.securityText}>Secure Payment</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  formContainer: {
    width: '100%',
    maxWidth: 600,
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
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: isDark ? '#d1d5db' : '#1f2937',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  input: {
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    borderWidth: 1,
    borderColor: isDark ? '#4b5563' : '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: isDark ? '#ffffff' : '#1f2937',
    marginBottom: 16,
  },
  halfInput: {
    flex: 1,
  },
  paymentPlaceholder: {
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    borderWidth: 1,
    borderColor: isDark ? '#4b5563' : '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  paymentPlaceholderText: {
    fontSize: 14,
    color: isDark ? '#9ca3af' : '#6b7280',
  },
  submitButton: {
    backgroundColor: '#eab308',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityContainer: {
    alignItems: 'center',
    paddingTop: 16,
  },
  securityText: {
    fontSize: 12,
    color: isDark ? '#6b7280' : '#9ca3af',
  },
  successContainer: {
    backgroundColor: '#d1fae5',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#065f46',
    marginBottom: 8,
  },
  successText: {
    fontSize: 16,
    color: '#065f46',
  },
});

export default DonationForm;

