import './App.css';
import Header from './components/header';
import FormRegister from './components/formRegister';
import FormConfirm from './components/formConfirm';
import FormActivated from './components/formActivated';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Context from './contexts/context';
import { useState } from "react";
import ModalAlert from './components/modalAlert';


function App() {
  const [regStatus, setRegStatus] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  return (
    <Context.Provider value={{regStatus, setRegStatus, activeStatus, setActiveStatus, modalAlert, setModalAlert}}>
      <Router>
        <div className="App">
          <Header />
          
          <div className="wrapper m-wrapper">
            <Switch>
              <Route path="/reg" component={FormRegister} />
              <Route path="/confirm" 
                render={() => 
                  <FormConfirm>
                    <ModalAlert />
                  </FormConfirm>}/>
              <Route path="/active" component={FormActivated} />
              <Route exact path="/" component={FormRegister} />
              <Route render={() => <p>Элемент не найден</p>} />
            </Switch>
          </div>

        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
