import styled from 'styled-components'

export const Container = styled.div`
height: 60px;
background: ${ props => props.theme.colors.primary};
color: #fff;
justify-content: space-between;
display: flex;
align-items: center;
padding: 0 30px;
`