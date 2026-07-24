import React, { useState, useEffect } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Users.css";

function Users() {

  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "User",
  });

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("hospitalUsers"));

    if(data){

      setUsers(data);

    }

  }, []);

  useEffect(()=>{

    localStorage.setItem("hospitalUsers",JSON.stringify(users));

  },[users]);



  const handleChange=(e)=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value,

    });

  };



  const handleSubmit=(e)=>{

    e.preventDefault();

    if(!form.name || !form.email || !form.phone){

      alert("Fill all fields");

      return;

    }

    if(editId){

      const updated=users.map((item)=>

      item.id===editId ? {...item,...form}:item

      );

      setUsers(updated);

      setEditId(null);

    }

    else{

      setUsers([

        ...users,

        {

          id:Date.now(),

          ...form,

        },

      ]);

    }

    setForm({

      name:"",

      email:"",

      phone:"",

      role:"User",

    });

  };



  const editUser=(user)=>{

    setForm(user);

    setEditId(user.id);

  };



  const deleteUser=(id)=>{

    if(window.confirm("Delete User?")){

      setUsers(users.filter((item)=>item.id!==id));

    }

  };



  const filteredUsers=users.filter((item)=>

  item.name.toLowerCase().includes(search.toLowerCase()) ||

  item.email.toLowerCase().includes(search.toLowerCase())

  );



  return(

<AdminLayout>

<div className="users-page">

<h2>👤 Users Management</h2>

<input

className="search-box"

type="text"

placeholder="Search User"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<form className="user-form" onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>


<input

type="email"

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>


<input

type="text"

name="phone"

placeholder="Phone"

value={form.phone}

onChange={handleChange}

/>


<select

name="role"

value={form.role}

onChange={handleChange}

>

<option>User</option>

<option>Admin</option>

</select>


<button>

{editId?"Update User":"Add User"}

</button>

</form>



<table className="user-table">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Role</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

filteredUsers.map((user)=>(

<tr key={user.id}>

<td>{user.name}</td>

<td>{user.email}</td>

<td>{user.phone}</td>

<td>{user.role}</td>

<td>

<button

className="edit-btn"

onClick={()=>editUser(user)}

>

Edit

</button>

<button

className="delete-btn"

onClick={()=>deleteUser(user.id)}

>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

</AdminLayout>

);

}

export default Users;