import React,{Component} from 'react'
import { Button } from 'react-bootstrap';

class Baris extends Component{
    render(props){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.content}</td>
                <td>
                    <Button variant="danger" className='m-1'>Hapus</Button>
                    <Button variant="info" className='m-1'>edit</Button>
                </td>
            </tr>
        )
    }
}
export default Baris