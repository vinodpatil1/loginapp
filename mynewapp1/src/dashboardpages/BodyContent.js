

import React, { useState, useEffect } from "react";
import axios from "axios";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const BodyContent = () => {

  const [feeds, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


   // comments data
   // State to store the fetched data
   const [dataCommets, setDatacomment] = useState([]);

   // Function to fetch data using Axios
   const fetchDataComments = async () => {
     try {
       const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
       setDatacomment(response.data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };
 
   // Call fetchData on component mount
   useEffect(() => {
    fetchDataComments();
   }, []);



 
  return (
   <>
  <section className='body-centent'>
   <div className="row">
     <div className="col-4">
     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Feed</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={feeds}
        label="Feed"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={20}>Comments</MenuItem>
        <MenuItem value={30}>Posts</MenuItem>
      
      </Select>
    </FormControl>
     </div>
   </div>
      <div className="row pt-3 ">
       {dataCommets.map((post,ind) => (
            <div className="col-4">
              <div className="card mb-2">
                <div className="card-body" key={ind}>
                    <p className="card-text"><b>Name:</b> {post.name}</p>
                    <p className="card-text"><b>Email:</b> {post.email}</p>
                    <p className="card-text"><b>Body:</b> {post.body}</p>
                </div>
              </div>
              </div> 
              ))}
       </div>
      </section>
   </>
  )
}

export default BodyContent;