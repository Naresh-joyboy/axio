import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = ({ url }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const updates = async () => {
    try{
    await axios.put(`${url}/${id}`, {
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    });
    navigate("/edit");
}catch(error){
    console.log("there is an error");
}
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUserName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setAddress(localStorage.getItem("address"));
    setPhone(localStorage.getItem("phone"));
    setWebsite(localStorage.getItem("website"));
    setCompany(localStorage.getItem("company"));
  }, []);
  return (
    <Form>
      <Form.Field className="formm">
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>UserName</label>
        <input
          type="text"
          value={username}
          placeholder="Enter username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Address</label>
        <input
          type="text"
          value={address}
          placeholder="Enter address"
          required
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Phone</label>
        <input
          type="Number"
          value={phone}
          placeholder="Enter number"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Website</label>
        <input
          type="text"
          value={website}
          placeholder="Enter website"
          required
          onChange={(e) => setWebsite(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Company</label>
        <input
          type="text"
          value={company}
          placeholder="Enter company"
          required
          onChange={(e) => setCompany(e.target.value)}
        />
      </Form.Field>
      <Button className="btn" onClick={updates}>
        update
      </Button>
    </Form>
  );
};

export default Update;
