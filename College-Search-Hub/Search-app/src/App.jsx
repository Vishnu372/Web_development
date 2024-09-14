import React from 'react';
import Navbar from './NavBar';
import SuccessComponent from './Success';


import SearchBar from './SearchBar';

const App = () => {
    return (
        <div>
            <Navbar />
            <SuccessComponent />
            <SearchBar /> 
        </div>
    );
};

export default App;
