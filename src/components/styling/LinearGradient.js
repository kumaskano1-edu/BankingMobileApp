import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Theme from "../../../config/MainTheme"

export default function MyLinearGradient() {
    return (
        <LinearGradient
                  colors={[ Theme.mainColor, Theme.secondaryColor, Theme.thirdColor]}
                  style={{ flex: 1 }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={
                      { 
                        width: '100%',
                        height: '100%',
                    }
                  }
                >
            </LinearGradient>
    )
}
