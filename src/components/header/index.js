import React, { useContext}from 'react'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'
import {Container} from './styles.js'
import { shade } from 'polished'
export default  function  Header({toggleTheme}) {
 const {colors, title} = useContext( ThemeContext )
 
  return(
    
     <Container>
     <h2> switcher </h2>
     <Switch 
     onChange={ toggleTheme }
     checked={ title === 'dark'  }
     checkedIcon={false }
     uncheckedIcon={ false }
     height={ 10 }
     width={ 40 }
     handleDiameter={ 20 }
     offColor={ shade(0.15, colors.primary )}
     onColor={ colors.secundary}
     />
    
     </Container>
    
    )
}