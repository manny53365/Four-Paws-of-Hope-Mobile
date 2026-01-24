import React from "react";
import { View, Text, StyleSheet, ScrollView, useColorScheme, ImageBackground } from "react-native";
import DonationOptions from "../../forms/DonationOptions";
import DonationForm from "../../forms/DonationForm";

const Donation: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = getStyles(isDark);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.heroContainer}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Give Hope to a Pet in Need</Text>
          <Text style={styles.heroSubtitle}>
            Your contribution helps us reunite lost pets with their families and find loving homes for those without one.
          </Text>
        </View>
      </View>
      <DonationOptions />
      <DonationForm />
    </ScrollView>
  );
};

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDark ? '#111827' : '#f9fafb',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  heroContainer: {
    minHeight: 200,
    backgroundColor: isDark ? '#374151' : '#6b7280',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: 600,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
});

export default Donation;

