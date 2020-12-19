import React, {Component} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Theme from "../../../config/MainTheme"

export default class MyLinearGradient extends Component {

  _handleRef = (component) => {
		this.component = component;
	};
  render() {
    return (
      <LinearGradient
                colors={[ Theme.mainColor, Theme.secondaryColor, Theme.thirdColor]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={
                    { 
                      width: '100%',
                      height: '100%',
                      ...this.props.style,
                  }
                }
              >
                {this.props.children}
          </LinearGradient>
  )
  }
}
