import styled from "styled-components";

const Button = styled.button`
  font-size:1em;
  padding:1em;
  margin: 0.5em;;
  border:2px solid #ced7e0;
  background: ${ (props) => props.background || "#9ccddc" };
`
const ButtonContainer = styled.div`
  display:flex;
  background: #054569;
  justify-content: space-evenly;
`


const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <ButtonContainer>
      <Button onClick={launchDecrease}>Previous Launch</Button>
      <Button background="green" onClick={launchIncrease}>Next Launch</Button>
    </ButtonContainer>
  )

}

export default LaunchSelector;