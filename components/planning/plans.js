import {PlanningButton} from './../ui/button/styles'

function StartPlans ({children, ...props}){
    
    return (
        <PlanningButton>
            {children}
        </PlanningButton>
    )
}

export default StartPlans