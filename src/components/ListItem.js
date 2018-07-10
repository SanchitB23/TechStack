import React, { Component } from 'react';
import { CardItem, Text, StyleProvider } from 'native-base';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import * as actions from '../actions';

class ListItem extends Component {
  constructor() {
    super();
    //For android , LayoutAnimation does not work
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDiscription() {
    if (this.props.expanded) {
      return (
        <CardItem>
          <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
        </CardItem>
      );
    }
  }
  render() {
    return (
       <StyleProvider style={getTheme(material)}>
         <TouchableWithoutFeedback onPress={() => this.props.selectLib(this.props.library.id)}>
           <View>
             <CardItem bordered >
               <Text style={{ fontWeight: 'bold' }}>
                 {this.props.library.title}
               </Text>
             </CardItem>
             {this.renderDiscription()}
           </View>
          </TouchableWithoutFeedback>
       </StyleProvider>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibID === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
