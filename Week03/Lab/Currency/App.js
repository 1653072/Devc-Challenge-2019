import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import NumberFormat from 'react-number-format';

const FormattedCurrency  = (props) => {
  const prefix = (props.type === 'usd' ? '$ ' : 'đ ');
  const unit = (props.type === 'usd' ? ' USD' : ' VND');

  return (
    <Text style={styles.currencyText}>
      <NumberFormat 
        value={props.value} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={prefix} 
        suffix={unit}
        renderText={(value) => <Text>{value} </Text>}
      />
    </Text>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCurrency: 'vnd',
      toCurrency: 'usd',
      currentCurrency : 0,
      conversionCurrency : 0
    };
  }

  convertCurrency = (fromCur, toCur, input) => {
    if (input == '') input = 0
    
    let resultConversion
    if (fromCur === 'vnd' && toCur === 'usd') {
      resultConversion = input * 1.0 / 23000
    }
    else {
      resultConversion = input * 23000
    }

    this.setState({
      fromCurrency : fromCur,
      toCurrency : toCur,
      currentCurrency : input,
      conversionCurrency : resultConversion
    })
  }

  ConversionButton(fromCur, toCur) {
    const bgcolor = (fromCur === this.state.fromCurrency && toCur === this.state.toCurrency ? 'lightblue' : null);
    const buttonStyle = { backgroundColor: bgcolor };
  
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={() => this.convertCurrency(fromCur, toCur, this.state.currentCurrency)} >
          <Text style={styles.btntext}>{fromCur.toUpperCase()} to {toCur.toUpperCase()}</Text>
        </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Please enter the value of the currency you want to convert</Text>
        <TextInput 
          keyboardType="number-pad" 
          style={styles.inputbox} 
          autoFocus={true} 
          selectionColor="lightblue" 
          placeholder="100,000,000" 
          onChangeText={(value) => this.convertCurrency(this.state.fromCurrency, this.state.toCurrency, value)}
          name="inputcurrency"/>
        {this.ConversionButton('vnd', 'usd')}
        {this.ConversionButton('usd', 'vnd')}
        <View>
          <Text style={styles.currencyTitle}>Current currency</Text>
          <FormattedCurrency 
            type={this.state.fromCurrency}
            value ={this.state.currentCurrency}
          />
          <Text style={styles.currencyTitle}>Conversion currenecy</Text>
          <FormattedCurrency 
            type={this.state.toCurrency}
            value ={this.state.conversionCurrency}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  inputbox: {
    height: 60,
    padding: 5,
    width: 300,
    fontSize: 35,
    borderWidth: 1,
    borderColor: 'lightblue',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center',
  },
  btntext: {
    fontSize: 18,
  },
  currencyTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
