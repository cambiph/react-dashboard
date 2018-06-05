import styled from 'styled-components'

const Temperature = styled.div`
  font-size: 4em;
  color: ${props => props.theme.palette.primaryColor};
`

export default ({ value }) => (
    <Temperature>{value}°</Temperature>
)
