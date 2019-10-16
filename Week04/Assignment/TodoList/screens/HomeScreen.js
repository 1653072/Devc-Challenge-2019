import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native';
import { TODOS } from '../utils/data.js';

const TodoItem = props => {
    const statusStyle = { backgroundColor: props.todo.status === 'Done' ? '#ffe5e1' : '#ffda94' };

    const onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    // onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
            ],
            { cancelable: true }
        );
    };

    return (
        <TouchableOpacity
            key={props.todo.body}
            style={[styles.todoItem, statusStyle]}
            onPress={() => props.onToggleTodo(props.todo.id)}
            onLongPress={() => onLongPress(props.todo)}
        >
            <Text style={styles.todoText}>
                {props.idx}: {props.todo.body}
            </Text>
        </TouchableOpacity>
    );
};

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: TODOS,
            todoBody: ''
        };
    }

    onToggleTodo = id => {
        todoList = this.state.todoList
        const todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        this.setState({
            todoList: [...todoList]
        })
        
        setTimeout(() => {
            this.props.navigation.navigate('Detail', { id: todo.id, status: todo.status, body: todo.body})
        }, 1000);
    };

    onDeleteTodo = id => {
        todoList = this.state.todoList
        const newTodoList = todoList.filter(todo => todo.id !== id);
        this.setState({
            todoList: newTodoList
        })
    };

    onSubmitTodo = () => {
        todoList = this.state.todoList
        const newTodo = {
            body: this.state.todoBody,
            status: 'Active',
            id: todoList[todoList.length - 1].id + 1
        };
        const newTodoList = [...todoList, newTodo];
        this.setState({
            todoList: newTodoList,
            todoBody: ''
        })
    };

    setTodoBody = (text) => {
        this.setState({ todoBody: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatcontainer}>
                    <FlatList
                        data={this.state.todoList}
                        renderItem={({ item }) => <TodoItem key={item.body} todo={item} idx={item.id} onToggleTodo={this.onToggleTodo} onDeleteTodo={this.onDeleteTodo}/>}
                        numColumns={1}
                        keyExtractor={item => (item.id).toString()}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.todoBody}
                        style={styles.todoInput}
                        onChangeText={text => this.setTodoBody(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ff7961',
        justifyContent: 'center',
    },
    flatcontainer: {
        flex: 0.75,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 5,
    },
    todoItem: {
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        width: '95%',
        minHeight: 20,
        color: 'tomato',
        borderRadius: 5,
        flexWrap: 'wrap'
    },
    todoText: {
        fontSize: 18,
        color: 'tomato',
        fontWeight: 'bold'
    },
    inputContainer: {
        flex: 0.25,
        width: '90%',
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoInput: {
        width: '95%',
        minHeight: 50,
        color: 'white',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderColor: 'white',
        fontSize: 18
    },
    button: {
        height: 50,
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#ffbf94',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'tomato',
        fontWeight: 'bold',
        fontSize: 18,
    }
});