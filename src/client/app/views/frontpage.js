import react from 'react';
import './frontpage.css';
import searchBar from '../components/searchBar';

export default class frontpage extends React.Component {
    render () {
        return <div name='frontpage'>
                <h1 className='header'>Destiny 2 Blizzard lookup!</h1>
                <searchBar/>
            </div>
    }
}