import React, { useState  } from 'react';

function Form() {

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [save, setSave] = useState('');

  return (
    <div className="App">
      <form>
        <input type='num' 
          name='number' 
          placeholder='Full Card Number' 
          value={number}
          onChange={ e => setNumber(e.target.value)}
          save={e => setSave(e.target.name)}
        />
        <input type='text'
          name='name'
          placeholder='Name on Card'
          value={name}
          onChange={ e => setName(e.target.value)}
          save={e => setSave(e.target.name)}
        />
        <input type='text'
          name='expiration'
          placeholder='MM/YY' 
          value={expiration}
          onChange={ e => setExpiration(e.target.value)}
          save={e => setSave(e.target.name)}
        />
        <input type='text'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          onChange={ e => setCvc(e.target.value)}
          save={e => setSave(e.target.name)}
        />

      </form>

    </div>
  );
}

export default Form;
