import React,{Component} from 'react'
import { Button, } from 'react-bootstrap';
import Edit from './edit'
import Delete from './delete'
import {LinkContainer, } from 'react-router-bootstrap'
import {Route,Switch,} from 'react-router-dom'

class Baris extends Component{
    render(props){    
       
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                    <td>       
                        <LinkContainer to={`/tabel/delete/${this.props.id}`}>
                            <Button variant="danger" className='m-1'>delete</Button>
                        </LinkContainer>  
                        <LinkContainer to={`/tabel/edit/${this.props.id}/${this.props.title}/${this.props.content}`}>
                            <Button variant="info" className='m-1'>edit</Button>
                        </LinkContainer>  
                        <Switch>
                            <Route path='/tabel/delete/:idNotes' component={ Delete } />
                            <Route path='/tabel/edit/:idNotes/:titleNote/:contentNote' component={ Edit }/>
                        </Switch>
                </td>
            </tr>
        )
    }
}
export default Baris