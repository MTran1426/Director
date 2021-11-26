import {PlanningButton} from './../ui/button/styles'

function StartPlans ({children, ...props}){
    
    return (
        <PlanningButton>
            <a href="/login">
            {children}
            </a>
        </PlanningButton>
    )
}

export default StartPlans