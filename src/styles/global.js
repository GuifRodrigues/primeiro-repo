import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
 padding: 0;
 margin: 0;
 box-sizing: border-box;
}
body{
  background: ${ props => props.theme.colors.background };
  font-size: 14px;
  color: ${ props => props.theme.colors.text};
  font-family: Sans-Serif;
}
`