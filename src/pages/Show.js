import { useState } from 'react';

function Show(props){
    const id = props.match.params.id;
    const people= props.people;
    const person = people.find((p) => p._id === id);

    const[editForm, setEditForm] = useState(person);

    const handleChange = (event) => {
        setEditForm((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const{ _id, name, title, image} = editForm;
        props.updatePeople({name, title, image}, _id);
        //redirect people back to index
        props.history.push('/');
    }; 

    const removePerson = () => {
        props.deletePeople(person._id);
        props.history.push('/');
    };


    return (
        <div className='person'>
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />
            <button id="delete" onClick={removePerson}>
                DELETE
                </button>
            <form action={handleSubmit}>
                <input 
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                 />
                <input 
                type="text"
                value={editForm.image}
                name="image"
                placeholder="image URL"
                onChange={handleChange}
                 />
                <input 
                type="text"
                value={editForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
                 />
                 <input type="submit" value="Edit Person" />
            </form>
        </div>
    )
}



export default Show;