import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

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

export default function App () {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});

  const ChoiceCard = ({ player, choice: { uri, name } }) => {
    const title = name;
    return (
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceDescription}>{player}</Text>
        <Image source={{uri}} resizeMode="contain" style={styles.choiceImage} />
        <Text style={styles.choiceCardTitle}>{title}</Text>
      </View>
    );
  };

  const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'Rock') {
      if (computerChoice === 'Paper') result = 'Defeat!';
      else
        if (computerChoice === 'Scissors') result = 'Victory!';
    }

    if (userChoice === 'Paper') {
      if (computerChoice === 'Scissors') result = 'Defeat!';
      else
        if (computerChoice === 'Rock') result = 'Victory!';
    }

    if (userChoice === 'Scissors') {
      if (computerChoice === 'Rock') result = 'Defeat!';
      else
        if (computerChoice === 'Paper') result = 'Victory!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';

    return [result, computerChoice];
  };

  const onPress = playerChoice => {
    const [result, computerChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === computerChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };
  
  const Button = props => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => props.onPress(props.name)}
    >
      <Text style={styles.buttonText}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );

  const getResultColor = () => {
    if (gamePrompt === 'Victory!') return 'green';
    if (gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: getResultColor()}}>{gamePrompt}</Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" choice={userChoice} />
        <Text style={{color: '#250902', fontSize: 18}}>vs</Text> 
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      {
        CHOICES.map(choice => {
          return <Button key={choice.name} name={choice.name} onPress={onPress} />;
        })
      }
    </View>
  );
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
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});