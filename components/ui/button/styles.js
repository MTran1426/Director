import styled from 'styled-components';


const ButtonBase = styled.button`
    box-shadow:0 0 3px 1px grey;
    padding: 0.5rem 1rem;
    color:grey;
    background-color: ${props=>props.bgcolor || "transparent"};
    border:none;
    border-radius:4px;
    color: ${(props)=>props.color || "black"};
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    text-decoration: none;
`

const ProviderButton = styled(ButtonBase)`
    display:flex;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    gap:0.25rem;
    background-color: ${props=>props.bgcolor || "transparent"};
    color: ${(props)=>props.color || "black"};
    padding:0.5rem 2rem;
    font-weight: 600;
    font-size: ${props => props.size || "1.125rem"};
    cursor: pointer;
`

const PlanningButton = styled(ButtonBase)`
    
    background-color: grey;
    display: flex;
    margin: auto;
    a{
        text-decoration:none;
        color: black;
    }
`

export {ButtonBase, ProviderButton, PlanningButton}