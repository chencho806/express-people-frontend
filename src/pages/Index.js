import { Link } from 'react-router-dom';
import { useState } from 'react';

const Index = (props) => {
    const [newForm, setNewForm] = useState(getNewState());
    // loading/loaded helper functions
    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                <img style={{height: 100, width: 100,  borderRadius: '50%'}} src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ));
    }

    const loading = () => <h1>Loading ...</h1>;

    // form helper functions

    const handleChange = (event) => {
        // using the callback pattern to take snapshot of previous state
        // and merge it into new state
        setNewForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value // computed property name syntax
            }
        ));
    }

    const handleSubmit = (event) => {
        // we need to turn off the default behavior of a form submission
        event.preventDefault();
        // what should we do now?
        // HINT - using the createPeople prop
        props.createPeople(newForm)
        setNewForm(getNewState());
    }

    function getNewState() {
        return {
            name: "",
            image: "",
            title: ""
        }
    }
    
    return (
        <section>
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                    value={newForm.name} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Alan Turing"
                    name="name" 
                />
                <input 
                    value={newForm.image} 
                    onChange={handleChange} 
                    type="url"
                    placeholder="https://someprofileimage.png"
                    name="image" 
                />
                <input 
                    value={newForm.title} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Mathematician"
                    name="title" 
                />
                <input type="submit" value="Create Person" />
            </form>
            { props.people ? loaded() : loading() }
        </section>
    );
}

export default Index;