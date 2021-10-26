import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


const Main = (props) => {
    const [ people, setPeople ] = useState([]);

    // const BASE_URL = 'http://localhost:3001/people/';
    const BASE_URL = 'https://aqueous-atoll-92109.herokuapp.com/people/'
    
    const getPeople = async () => {
        const data = await fetch(BASE_URL).then(response => response.json());
        // const response = await fetch(BASE_URL);
        // const data = await response.json();
        setPeople(data);
    };

    const createPeople = async (person) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify(person),
        });
        getPeople();  // get people and update state after creating a person
    };

    const updatePeople = async (person, id) => {
            await fetch(BASE_URL + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(person)
            });
            getPeople()
    };

    const deletePeople = async id => {
        await fetch(BASE_URL + id, { method: 'DELETE' });
        getPeople();
    }

    useEffect(() => getPeople(), []);


    
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index people={people} createPeople={createPeople} />
                </Route>
                <Route path="/people/:id" render={(rp) => (
                    // render props or "rp" for short
                    // includes three objects => Location, Match, History
                    people.length ?
                        <Show 
                            {...rp}
                            people={people} 
                            updatePeople={updatePeople}
                            deletePeople={deletePeople}
                        />
                    :
                    <Redirect to="/" />
                )} />
            </Switch>
        </main>
    );
}






export default Main;
