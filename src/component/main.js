import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import TableCobe from './table'
import Formreg from './form'
import Navku from './navbar'

class Main extends Component{
    render() {
        return(
        <Router>
            <Navku/>
            <Switch>
                <Route path='/tabel' component={ TableCobe }/>
                <Route exact path="/tabelberubah" render={() => (
                    <Redirect to="/tabel"/>                                                                
                )}/>
                <Route path='/form' exact component={ Formreg }/>
            </Switch>      
        </Router>    
        )
    }
}
export default Main;