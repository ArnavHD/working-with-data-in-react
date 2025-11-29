import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Submitted");
        if(password.length < 6){
            setError('Password must be 6 character or longer');
        }
        else{
            setError(''); // error set এর সময় always else টা দিতে হবে না হলে always error show করবে।
        }
    }

    const handlePasswordOnChange = (e)=>{
        // console.log(e.target); // একটা একটা করে click করলে input field টা ততবার দেখাবে। <input .../>
        console.log(e.target.value); // এইবার value দেখা যাবে।  
        setPassword(e.target.value);

        // if(password.length < 6){
        //     setError('Password must be 6 character or longer');
        // }
        // else{
        //     setError('');// error set এর সময় always else টা দিতে হবে না হলে always error show করবে।
        // }
    }
    return (
        
        // password বা কোনোকিছু ভুল হলে immediately বলবে। 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email'  placeholder='Enter Email' required />
                <br />
                {/* এখানে value={password} দিলে password fixed করে দিবে field এ তাই কোন password ই type করা যাবে না তাই defaultValue add করা হয়েছে।  */}
                <input type="password" name='password' onChange={handlePasswordOnChange} defaultValue={password}  placeholder='Enter Password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;