import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ChoiceCard } from './components/ChoiceCard';

const CHOICES = [
  {
    name: 'Rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'Paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'Scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];

const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

const processGame = (user) => {
  const computer = randomComputerChoice().name;

  if (user === 'Rock') {
    if (computer === 'Paper') result = 'Defeat!';
    else
      if (computer === 'Scissors') result = 'Victory!';
  }

  if (user === 'Paper') {
    if (computer === 'Scissors') result = 'Defeat!';
    else
      if (computer === 'Rock') result = 'Victory!';
  }

  if (user === 'Scissors') {
    if (computer === 'Rock') result = 'Defeat!';
    else
      if (computer === 'Paper') result = 'Victory!';
  }

  if (user === computer) result = 'Tie game!';

  return [result, computer, user]
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt : 'Choose your weapon!',
      computerChoice : null,
      userChoice : null
    };
  }

  updateGameState(choicename) {
    arrRes = processGame(choicename)
    this.setState({
      gamePrompt : arrRes[0],
      computerChoice : CHOICES.find(choice => choice.name === arrRes[1]),
      userChoice : CHOICES.find(choice => choice.name === arrRes[2])
    })
  }

  RPSButton(choicename) {
    return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => this.updateGameState(choicename)}
        key={choicename}
      >
        <Text style={styles.buttonText}>{choicename}</Text>
      </TouchableOpacity>
    );
  }

  getResultColor = () => {
    if (this.state.gamePrompt === 'Victory!') return 'green';
    if (this.state.gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 24, color: this.getResultColor()}}>{this.state.gamePrompt}</Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={this.state.userChoice} />
          <Text style={{color: '#250902', fontSize: 18}}>vs</Text> 
          <ChoiceCard player="Computer" choice={this.state.computerChoice} />
        </View>
        {
          CHOICES.map(choice => {
            return this.RPSButton(choice.name)
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
    marginTop: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  choicesContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOpacity: 0.90,
    shadowRadius: 5,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
},
});