import React,{Component} from 'react'
import { Button,ButtonToolbar, } from 'react-bootstrap';
import Delete from './delete'

class Baris extends Component{
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      } 
    render(props){    
          let modalClose = () => this.setState({ modalShow: false });
       
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>     
                    <ButtonToolbar>
                        <Button
                        variant="primary"
                        onClick={() => this.setState({ modalShow: true })}
                        >
                        Launch vertically centered modal
                        </Button>

                        <Delete
                        show={this.state.modalShow}
                        onHide={modalClose}
                        />
                    </ButtonToolbar>
                    <Button variant="info" className='m-1'>edit</Button>
                </td>
            </tr>
        )
    }
}
export default Baris