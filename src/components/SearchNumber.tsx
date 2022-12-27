import { useState } from "react"

export const SearchNumber = ({ onNewNumber }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();//not reload by default
        setInputValue('');
        onNewNumber( inputValue.trim() );
    }

    
    return (
        <form onSubmit={ onSubmit } className='search-form'>
            <input 
                    type="number"
                    placeholder="Type a number"
                    value ={inputValue}
                    onChange={ onInputChange }
            />
        </form>
    )
}