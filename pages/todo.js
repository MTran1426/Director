import { useAuth } from "../libs/hooks/useAuth";
import { AppBar } from "../components/appbar";
import {Title} from "../ui/title"


function ToDoPage(props) {
   const user = useAuth()
    if(!user){
      <>
      <AppBar/>
      <Title>Youre not welcome go away</Title>
      </>
    }

    return (
      <>
      <AppBar/>
      <Title>Render The Users To LIST</Title>
      </>
    )
  
}

export default ToDoPage;
