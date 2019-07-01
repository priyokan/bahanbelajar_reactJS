import React,{Component} from 'react';  
import {Table} from 'react-bootstrap';
import axios from 'axios'
let datah

class TableCoba extends Component{

    componentDidMount() {
        axios.get(`http://localhost:5000/notes`)
          .then(res => {              
                datah = res.data
                console.log(datah)
          })
      }

    render(){
        let data=datah
        return(
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
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

                    {this.data}
                </tbody>
            </Table>
        )
    }
}
export default TableCoba