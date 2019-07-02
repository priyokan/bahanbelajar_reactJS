import React,{Component} from 'react';  
import {Table} from 'react-bootstrap';
import axios from 'axios'
import Baris from './baris'

class TableCoba extends Component{

    constructor(props){
        super(props);
        this.state={
            datas:[],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/notes`)
          .then(res => {              
            this.setState({
                datas:res.data
            })
          })
      }

    baris(i){}

    render(){
        const ret =  this.state.datas[0][0]
        console.log(ret)
        return(
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                   <Baris
                    // id={ret[0]._id}
                    title='buku'
                    content='habis gelap ga terang terang'/>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>                    
                </tbody>
            </Table>
        )
    }
}
export default TableCoba