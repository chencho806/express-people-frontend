import { Link } from 'react-router-dom'
//Link tags allow us to perform client side routing to avoid default page refresh
//Link tags manipulate our browsers 


const Header = (props) => {
    return (
        <header className='Header'>
            <Link to='/'>
                <h1>People App</h1>
            </Link>
        </header>
    );
};



export default Header;