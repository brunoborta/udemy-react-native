import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    // Where's the item right now?
    this.position = new Animated.ValueXY(0,0);

    // Where's the element moving to?
    Animated.spring(this.position, {
      toValue: { x: 200, y: 450 }
    }).start();
  }

  render() {
    return (
      // Which element are we moving?
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}

export default Ball;