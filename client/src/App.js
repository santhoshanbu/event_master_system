// import Dashboard from './components/Dashboard/Dashboard'
import UserForm from './components/Form/Form'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getManagers} from './actions/managers'
import Managers from '../src/components/Managers/Managers'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getManagers())
  },[dispatch])
  return (
    <div>
      <UserForm/>
      <Managers/>
    </div>
  );
}

export default App;
