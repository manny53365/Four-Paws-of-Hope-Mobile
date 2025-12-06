import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Filters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Lost' | 'Found' | 'All'>('All');
  const [petTypes, setPetTypes] = useState<{ [key: string]: boolean }>({
    Dog: false,
    Cat: true,
    Bird: false,
    Other: false,
  });

  const togglePetType = (type: string) => {
    setPetTypes(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Pet By Filtering</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, breed..."
          placeholderTextColor="#9ca3af"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioOption, statusFilter === 'Lost' && styles.radioSelected]}
            onPress={() => setStatusFilter('Lost')}
          >
            <View style={[styles.radioCircle, statusFilter === 'Lost' && styles.radioCircleSelected]} />
            <Text style={styles.radioLabel}>Lost</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioOption, statusFilter === 'Found' && styles.radioSelected]}
            onPress={() => setStatusFilter('Found')}
          >
            <View style={[styles.radioCircle, statusFilter === 'Found' && styles.radioCircleSelected]} />
            <Text style={styles.radioLabel}>Found</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pet Type</Text>
        {['Dog', 'Cat', 'Bird', 'Other'].map(type => (
          <TouchableOpacity
            key={type}
            style={styles.checkboxOption}
            onPress={() => togglePetType(type)}
          >
            <View style={[styles.checkbox, petTypes[type] && styles.checkboxChecked]}>
              {petTypes[type] && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  searchIconContainer: {
    backgroundColor: '#f9fafb',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  radioSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#d1d5db',
    marginRight: 12,
  },
  radioCircleSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#3b82f6',
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d1d5db',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    borderColor: '#3b82f6',
    backgroundColor: '#3b82f6',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
});









