import React from 'react';
import './SearchBar.css';
import {FaSearch} from 'react-icons/fa';

export default ()=> {
    return(

        <div className="searchContent">
            <button>
                <FaSearch/>
            </button>
            <input type='text'>

            </input>
        </div>

    );
}