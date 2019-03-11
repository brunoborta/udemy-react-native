import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if(expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title } = styles;
    return (
    <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.id)}>
      <View>
        <CardSection>
          <Text style={title}>{this.props.library.title}</Text>
        </CardSection>
        {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);