import styled from 'styled-components';


const ButtonBase = styled.button`
    box-shadow:0 0 3px 1px grey;
    padding: 0.5rem 1rem;
    color:grey;
    background-color: ${props=>props.bgcolor || "transparent"};
    border:none;
    border-radius:4px;
    color: ${(props)=>props.color || "black"};
`

const ProviderButton = styled(ButtonBase)`
    img{
        vertical-align: baseline;
        margin-right:0.4rem;
    }
    display:flex;
    margin: auto;
`

const PlanningButton = styled(ButtonBase)`
    
    background-color: tomato;
    margin: auto;
`

export {ButtonBase, ProviderButton, PlanningButton}