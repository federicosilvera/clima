import React, {useState} from 'react'
import '../styles/forms.css'

const Forms = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log({city});
        if(city === '' || !city) return;

        newLocation(city);
    }

  return (
    <div className='form'>
        <form onSubmit={onSubmit}>
            <div className='container-input'>
                <input className='input' typet='text' placeholder='Ingrese una ciudad' onChange={(e) =>setCity(e.target.value)}/>
                    <button className='button' type='submit'>Buscar</button>
            </div>
        </form>
    </div>
  )
}

export default Forms