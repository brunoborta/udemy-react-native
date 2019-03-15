import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={ () => {} }
      transparent
    >
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>YES</Button>
          <Button onPress={onDecline}>NO</Button>
        </CardSection>

      </View>
    </Modal>
  );
}

const styles = {
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }

}

export { Confirm };