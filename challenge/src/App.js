import React, {useState} from 'react';
import './App.css';

function App() {

const [result, setResult] = useState('');

const submit = (event) => {
  event.preventDefault();
  console.log(event.target.strng.value)
  apiCall(event.target.strng.value)
}

const apiCall = async(string) => {
  const response = await fetch(`/reverse/${string}`);
  const body = await response.json();

  if(response.status !== 200) throw Error(body.message);

  return body;
}

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" name="strng" placeholder="enter text" />
        <button type="submit">Reverse</button>
      </form>

    </div>
  );
}

export default App;
