import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import './App.css'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const { data, error } = await supabase
      .from('interview') 
      .insert([
        { name: name, email: email, message: message },
      ]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/>
        <label>
          Message:
          <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;