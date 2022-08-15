import React, {useState} from "react";

export default function CreateTask (props){
    const{ onCreate } = props
    const[name,setName] = useState('')
    const[image,setImage] = useState('')
    const[useful_link,setLink] = useState('')
    const[urgency,setUrgency] = useState('')
    const[description,setDescription] = useState('')
    const[done,setDone] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        const task = {
            name: name,
            image: image,
            useful_link: useful_link,
            urgency: parseInt(urgency),
            description: description,
            done: done
        }
        onCreate(task)
        setName('')
        setImage('')
        setLink('')
        setUrgency('')
        setDescription('')
        setDone('')
    }




    return (
        <div>
          <h3>Create new Task</h3>
          <form onSubmit={handleForm}>
    
            <label>Name</label>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
            <label>Image</label>
                <input type="text" placeholder="Image " name="image" value={image} onChange={(e) => {setImage(e.target.value)}} />
            <label>Useful Link</label>
                <input type="text" placeholder="Link" name="useful_link" value={useful_link} onChange={(e) => {setLink(e.target.value)}} />
            <label>Urgency</label>
                <input type="number" placeholder="Urgency" name="urgency" value={urgency} onChange={(e) => {setUrgency(e.target.value)}}/>
            <label>Description</label>
                <input type="text" placeholder="Description" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            <label>Done</label>
            
            <select value={done} name="done" onChange={(e) => {setDone(e.target.value)}}>
                    <option value="True">👌 </option>
                    <option value="False">❌ </option>
            </select>
                
                
            <button type="submit">Create!</button>
          </form>
        </div>
      )
}