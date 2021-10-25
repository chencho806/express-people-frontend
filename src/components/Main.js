import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


const Main = (props) => {
    const [ people, setPeople ] = useState(null);

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

    useEffect(() => getPeople(), []);


    
        return (
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Index people={people} createPeople={createPeople}/>
                    </Route>
                    <Route path='/people/:id' render={(rp) => (
                    <Show {...rp} />)} />
                </Switch>
            </main>
        );
    };






export default Main;
