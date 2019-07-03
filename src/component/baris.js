import React,{Component} from 'react'
import { Button, } from 'react-bootstrap';
import Delete from './delete'
import {LinkContainer} from 'react-router-bootstrap'
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'

class Baris extends Component{
    render(props){    
       
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>            
                    <Router>
                        <LinkContainer to={`/tabel/delete/${this.props.id}`}>
                            <Button variant="danger" className='m-1'>delete</Button>
                        </LinkContainer>    
                        <Button variant="info" className='m-1'>edit</Button>
                        <Switch>
                            <Route path='/tabel/delete/:idNotes' component={ Delete } />
                            {/* <Route path='/form' exact component={ Formreg }/> */}
                        </Switch>  
                    </Router>
                </td>
            </tr>
        )
    }
}
export default Baris