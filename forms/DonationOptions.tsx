import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";

const DonationOptions: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [frequency, setFrequency] = useState<'One-Time' | 'Monthly'>('One-Time');
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Donation Amount</Text>

      <View style={styles.frequencyContainer}>
        <TouchableOpacity
          style={[styles.frequencyButton, frequency === 'One-Time' && styles.frequencyButtonActive]}
          onPress={() => setFrequency('One-Time')}
        >
          <Text style={[styles.frequencyText, frequency === 'One-Time' && styles.frequencyTextActive]}>
            One-Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.frequencyButton, frequency === 'Monthly' && styles.frequencyButtonActive]}
          onPress={() => setFrequency('Monthly')}
        >
          <Text style={[styles.frequencyText, frequency === 'Monthly' && styles.frequencyTextActive]}>
            Monthly
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.amountContainer}>
        {["$10", "$25", "$50", "$100", "Other"].map((amt, i) => (
          <TouchableOpacity
            key={i}
            style={styles.amountButton}
          >
            <Text style={styles.amountText}>{amt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  frequencyContainer: {
    flexDirection: 'row',
    backgroundColor: isDark ? '#374151' : '#6b7280',
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
    width: '100%',
    maxWidth: 300,
  },
  frequencyButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  frequencyButtonActive: {
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
  },
  frequencyText: {
    fontSize: 14,
    fontWeight: '500',
    color: isDark ? '#9ca3af' : '#d1d5db',
  },
  frequencyTextActive: {
    color: isDark ? '#ffffff' : '#1f2937',
  },
  amountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
    maxWidth: 400,
  },
  amountButton: {
    minWidth: 84,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: isDark ? '#374151' : '#6b7280',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default DonationOptions;

