import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

export default function Filters() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'Lost' | 'Found' | 'All'>('Lost');
  const [petTypes, setPetTypes] = useState<{ [key: string]: boolean }>({
    Dog: false,
    Cat: true,
    Bird: false,
    Other: false,
  });
  const [statusExpanded, setStatusExpanded] = useState(true);
  const [petTypeExpanded, setPetTypeExpanded] = useState(false);

  const togglePetType = (type: string) => {
    setPetTypes(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const styles = getStyles(isDark);

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
          placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => setStatusExpanded(!statusExpanded)}
        >
          <Text style={styles.sectionTitle}>Status</Text>
          <Text style={styles.expandIcon}>{statusExpanded ? '▼' : '▶'}</Text>
        </TouchableOpacity>
        {statusExpanded && (
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
        )}
      </View>

      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.sectionHeader}
          onPress={() => setPetTypeExpanded(!petTypeExpanded)}
        >
          <Text style={styles.sectionTitle}>Pet Type</Text>
          <Text style={styles.expandIcon}>{petTypeExpanded ? '▼' : '▶'}</Text>
        </TouchableOpacity>
        {petTypeExpanded && (
          <>
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
          </>
        )}
      </View>
    </View>
  );
}

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isDark ? '#374151' : '#e5e7eb',
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: isDark ? '#d1d5db' : '#1f2937',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: isDark ? '#374151' : '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
  },
  searchIconContainer: {
    backgroundColor: isDark ? '#374151' : '#f9fafb',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: isDark ? '#374151' : '#e5e7eb',
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: isDark ? '#d1d5db' : '#1f2937',
    backgroundColor: isDark ? '#111827' : '#ffffff',
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: isDark ? '#374151' : '#e5e7eb',
    paddingTop: 16,
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: isDark ? '#d1d5db' : '#374151',
  },
  expandIcon: {
    fontSize: 12,
    color: isDark ? '#9ca3af' : '#6b7280',
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
    borderColor: isDark ? '#374151' : '#e5e7eb',
  },
  radioSelected: {
    borderColor: '#3b82f6',
    backgroundColor: isDark ? '#1e3a8a' : '#eff6ff',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: isDark ? '#4b5563' : '#d1d5db',
    marginRight: 12,
  },
  radioCircleSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#3b82f6',
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: isDark ? '#d1d5db' : '#374151',
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
    borderColor: isDark ? '#4b5563' : '#d1d5db',
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
    color: isDark ? '#d1d5db' : '#374151',
  },
});

