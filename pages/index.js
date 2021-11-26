import firebase from './../firebase'

import NavBar from '../components/navbar'
import Brand from './../components/branding'
import Button from './../components/ui/button'
import StartPlans from '../components/planning/plans'


export default function Home() {
   console.log(firebase)
  return (
     <div>
       <NavBar/>
       <Brand title="ToDo Calender Planning App" tagline="Plan your future plans here"/>
       <StartPlans>Start Planning</StartPlans>
        {/* <Button bgcolor="tomato" color="white"><a href="/login">Start Planning</a></Button> */}
     </div>
    
  )
}
