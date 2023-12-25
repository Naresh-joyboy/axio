import React from 'react'
import { useState } from 'react'
import './App.css'
import {Form,Button} from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Create = ({url}) => {
 const[name,setName] =useState('')
 const[username,setUserName] =useState('')
 const[email,setEmail] =useState('')
 const[address,setAddress] =useState('')
 const[phone,setPhone] =useState('')
 const[website,setWebsite] =useState('')
 const[company,setCompany] =useState('')
 const navigate = useNavigate();

 const postData = async()=>{
    await axios.post(url,{
        name,username,email,address,phone,website,company    
    })
    setName('')
    setUserName('')
    setEmail('')
    setAddress('')
    setPhone('')
    setWebsite('')
    setCompany('')
    navigate('/edit');
 }

  return (
    <Form>
        <Form.Field className='formm'>
            <label>Name</label>
            <input type='text' value={name} placeholder='Enter Name' required onChange={e =>setName(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>UserName</label>
            <input type='text' value={username} placeholder='Enter username' required onChange={e =>setUserName(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>Email</label>
            <input type='email' value={email} placeholder='Enter email' required onChange={e =>setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>Address</label>
            <input type='text' value={address} placeholder='Enter address' required onChange={e =>setAddress(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>Phone</label>
            <input type='Number' value={phone} placeholder='Enter number' required onChange={e =>setPhone(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>Website</label>
            <input type='text' value={website} placeholder='Enter website' required onChange={e =>setWebsite(e.target.value)}/>
        </Form.Field>
        <Form.Field className='formm'>
            <label>Company</label>
            <input type='text' value={company} placeholder='Enter company' required onChange={e =>setCompany(e.target.value)}/>
        </Form.Field>
        <Button className='btn' onClick={postData}>submit</Button>
    </Form>
  )
}

export default Create