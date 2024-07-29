// src/screens/TransactionScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TransactionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default TransactionScreen;
