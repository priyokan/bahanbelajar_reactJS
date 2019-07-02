import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch, } from 'react-router-dom';
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
                <Route path='/form' exact component={ Formreg }/>
            </Switch>      
        </Router>    
        )
    }
}
export default Main;