import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

interface NavbarProps {
  navigation: any;
}

export default function Navbar({ navigation }: NavbarProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  const styles = getStyles(isDark);

  return (
    <View style={styles.navbar}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>FPOH</Text>
      </View>

      <View style={styles.navItems}>
        {!user && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.navText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
        {user && (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.navText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Donation')}>
              <Text style={styles.navText}>Donation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.navText}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const getStyles = (isDark: boolean) => StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: isDark ? '#374151' : '#e5e7eb',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: isDark ? '#ffffff' : '#1f2937',
  },
  navItems: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    color: isDark ? '#d1d5db' : '#374151',
    fontWeight: '500',
  },
});

