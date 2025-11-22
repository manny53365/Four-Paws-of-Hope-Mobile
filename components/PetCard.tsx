import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface PetCardProps {
  Pet: {
    name: string;
    breed: string;
    location: string;
    description: string;
    status: "Lost" | "Found";
    image: string;
  };
}

export default function PetCard({ Pet }: PetCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: Pet.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{Pet.name}</Text>
          <View style={[styles.statusBadge, Pet.status === 'Lost' ? styles.lostBadge : styles.foundBadge]}>
            <Text style={styles.statusText}>{Pet.status}</Text>
          </View>
        </View>
        <View style={styles.meta}>
          <Text style={styles.metaText}>{Pet.breed}</Text>
          <Text style={styles.metaText}> • </Text>
          <Text style={styles.metaText}>{Pet.location}</Text>
        </View>
        <Text style={styles.description}>{Pet.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Information</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  lostBadge: {
    backgroundColor: '#ef4444',
  },
  foundBadge: {
    backgroundColor: '#10b981',
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#6b7280',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#4b5563',
    fontSize: 14,
    fontWeight: '600',
  },
});


