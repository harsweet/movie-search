import React from 'react'

const Form = props => (

    
    <form onSubmit={props.getMovie} >
        <input type="text" name="movieName"/>
        <button>Search</button>
    </form>
);

export default Form;