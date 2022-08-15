/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import TodoHeader from "./src/components/TodoHeader"
import TodoList from "./src/components/TodoList"
import Store from "./src/redus/Store"
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    </Provider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

export default App;
