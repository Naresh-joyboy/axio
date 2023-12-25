import React,{ useState,useEffect}from 'react';
import {Table,Button} from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Edit = ({url}) => {
const [datas,setDatas]= useState([]);
const navigate = useNavigate();

const editUser =(id,name,username,email,address,phone,website,company)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('address',address)
    localStorage.setItem('phone',phone)
    localStorage.setItem('website',website)
    localStorage.setItem('company',company)
 navigate('/update')
}
const deleteUser =async (id)=>{
    await axios.delete(`${url}/${id}`)
    console.log(`${url}/${id}`)
    callApi();
}
const callApi = async () => {
    try{
        const resp = await axios.get(url);
        setDatas(resp.data)
    }catch(error){
        console.log("there is an error")
    }   
};
useEffect(()=>{
   callApi()
},[])
  return (
    <div>
    <Table singleLine>
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>userName</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
    {datas.map(data=>{
        return<Table.Row key={data.id}>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.username}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Table.Cell>{data.address}</Table.Cell>
            <Table.Cell>{data.phone}</Table.Cell>
            <Table.Cell>{data.website}</Table.Cell>
            <Table.Cell>{data.company}</Table.Cell>
            <Table.Cell><Button onClick={()=>{deleteUser(data.id)}}>Delete</Button></Table.Cell>
            <Table.Cell><Button onClick={()=>{editUser(data.id,data.name,data.username,data.email,data.address,data.phone,data.website,data.company)}}>Edit</Button></Table.Cell>
        </Table.Row>
    })}       
    </Table.Body>
    </Table>
    </div>
  )
}

export default Edit