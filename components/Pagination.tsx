import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';

export default function Pagination() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const currentPage = 1;
  const totalPages = 3;
  
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>‹</Text>
      </TouchableOpacity>
      {[1, 2, 3].map(page => (
        <TouchableOpacity
          key={page}
          style={[styles.pageButton, page === currentPage && styles.pageButtonActive]}
        >
          <Text style={[styles.pageText, page === currentPage && styles.pageTextActive]}>
            {page}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (isDark: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    borderWidth: 1,
    borderColor: isDark ? '#374151' : '#e5e7eb',
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: isDark ? '#9ca3af' : '#6b7280',
    fontWeight: 'bold',
  },
  pageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    borderWidth: 1,
    borderColor: isDark ? '#374151' : '#e5e7eb',
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButtonActive: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  pageText: {
    fontSize: 14,
    color: isDark ? '#d1d5db' : '#374151',
    fontWeight: '500',
  },
  pageTextActive: {
    color: '#ffffff',
  },
});


