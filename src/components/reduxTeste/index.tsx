import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
// Imports: Redux Actions 
// import { login } from '../redux/actions/authActions';
import { login } from '../../redux/actions/authActions';
import { increaseCounter, decreaseCounter } from '../../redux/actions/counterActions';
// Screen: Counter
function Counter({   loggedIn, reduxLogin, counter, reduxIncreaseCounter, reduxDecreaseCounter }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loggedInContainer}>
        <Text style={styles.loggedInText}>Logged In: </Text>
        <Text style={styles.loggedInText}>{`${loggedIn}`}</Text>       
        <Button
          title="Login"
          onPress={loggedIn === false ? () => reduxLogin(true) : () => reduxLogin(false)}
          
        />
        <Button
          title="list"
          onPress={() => { reduxClassList("result") }}
          
        />
      </View>
      <Text style={styles.counterTitle}>Counter</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => reduxIncreaseCounter()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity onPress={() => reduxDecreaseCounter()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}
// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,    
  };
};
// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(increaseCounter()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(decreaseCounter()),
    // Login
    reduxLogin: (result) => dispatch(login(result)),
     // Add in array 
    
  };
};
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Styles
const styles = StyleSheet.create({
  container: {     
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

function reduxClassList(arg0: string) {
  throw new Error('Function not implemented.');
}
