import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
// import styles from './styles';

const datass = [
  {
    id: 1,
    status: true
  },
  {
    id: 2,
    status: false
  },
  {
    id: 3,
    status: false
  },
  {
    id: 4,
    status: false
  },
  {
    id: 5,
    status: true
  },
  {
    id: 6,
    status: false
  },
  {
    id: 7,
    status: false
  },
  {
    id: 8,
    status: false
  },
  {
    id: 9,
    status: true
  },
  {
    id: 10,
    status: false
  },
  {
    id: 11,
    status: false
  },
  {
    id: 12,
    status: false
  },
  {
    id: 13,
    status: true
  },
  {
    id: 14,
    status: false
  },
  {
    id: 15,
    status: true
  },
  {
    id: 16,
    status: false
  },
  {
    id: 17,
    status: false
  },
  {
    id: 18,
    status: false
  },
  {
    id: 19,
    status: false
  },
  {
    id: 20,
    status: false
  },
  {
    id: 21,
    status: true
  },
  {
    id: 22,
    status: false
  },
  {
    id: 23,
    status: false
  },
  {
    id: 24,
    status: false
  },
  {
    id: 25,
    status: false
  },
  {
    id: 26,
    status: false
  },
  {
    id: 27,
    status: false
  },
  {
    id: 28,
    status: false
  },
  {
    id: 29,
    status: false
  },
  {
    id: 30,
    status: true
  },
  {
    id: 31,
    status: false
  },
  {
    id: 32,
    status: true
  },
  {
    id: 33,
    status: false
  },
  {
    id: 34,
    status: false
  },
  {
    id: 35,
    status: false
  },
  {
    id: 36,
    status: true
  }
];

export default class SeatBus extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, cond: 'false', color: 'red' };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
    if (this.state.count % 2 === 0) {
      this.setState({
        cond: 'true',
        color: 'gray'
      });
    }
    if (this.state.count % 2 === 1) {
      this.setState({
        cond: 'false',
        color: 'blue'
      });
    }
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={datass}
          renderItem={({ item }) => {
            let status = 0;
            if (item.status === true) {
              status = 1;
            }

            return (
              <TouchableOpacity
                disabled={status === 1}
                onPress={() => this.onPress(item.id)}
                style={
                  item.id % 2 === 0
                    ? item.id % 4 === 0
                      ? [
                          styles.nospace,
                          {
                            backgroundColor:
                              status === 0 ? '#0091ff' : '#c3c4c6'
                          }
                        ]
                      : [
                          styles.space,
                          {
                            backgroundColor:
                              status === 0 ? '#0091ff' : '#c3c4c6'
                          }
                        ]
                    : [
                        styles.nospace,
                        {
                          backgroundColor: status === 0 ? '#0091ff' : '#c3c4c6'
                        }
                      ]
                }>
                <Text style={styles.item}>{item.id}</Text>
              </TouchableOpacity>
            );
          }}
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 50,
    justifyContent: 'center'
  },

  space: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginRight: 50,
    backgroundColor: '#c3c4c6',
    margin: 2
  },
  nospace: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    margin: 2,
    backgroundColor: '#c3c4c6'
  }
});
