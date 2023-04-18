
import { useState } from 'react';
import { useEffect } from 'react';
import { SHA256 } from 'crypto-js';
import styles from './App.module.css'



function App() {


  //to capture user input for hashing
  const [textInput, setTextInput] = useState('')


  //output of hashing
  const [hashed, setHashed] = useState('')

  //output of filtered item

  const [filtered, setFiltered] = useState('')

  //take text input and pass to state
  function handleChange(e) {
    // console.log(e.target.value)
    setTextInput(e.target.value)
  }

  //prevent event form submission to the backend
  function preventSubmit(e) {
    e.preventDefault();
    //console.log(textInput)

    //hashing function done
    setHashed(SHA256(textInput).toString());
    //setHashed(hashedPassword)
    // console.log(hashed)
   // console.log(hashed.slice(-1))

  }


//useEffect to perform slice function and compare with logic
  useEffect(()=>{
		const compare = hashed.slice(-1)
    console.log(compare)
    if (compare === ''){
      setFiltered('')
    }
    else if (compare%2 === 0){
      setFiltered('This is an even number. Does not Pass')
    }
    else if ( compare%2 === 1){
      setFiltered('This is a odd number. Pass!')
    }
    else setFiltered('This is a alpabent. Does not Pass')
	}, [hashed])

  //logic to test the second endpoint
  return (
    <div className={styles.main}>
      <h1>Random Hash generator</h1>


      <form onSubmit={preventSubmit}>

        <input type='text' value={textInput} onChange={handleChange} className={styles.inputDesign}></input>

        <button type='submit' className={styles.buttonSetting}> Generate Hash</button>
      </form>

      <h5>Endpoint 1</h5>
      <input type='text' readOnly value={hashed} className={styles.inputDesign}></input>


      <h5>Endpoint 2</h5>
      <input type='text'readOnly value={filtered} className={styles.inputDesign}></input>
      
    </div>
  );
}

export default App;
