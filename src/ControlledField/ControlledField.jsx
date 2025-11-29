import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handlePasswordOnChange = (e)=>{
        // console.log(e.target); // একটা একটা করে click করলে input field টা ততবার দেখাবে। <input .../>
        console.log(e.target.value); // এইবার value দেখা যাবে।  
    }
    return (
        
        // password বা কোনোকিছু ভুল হলে immediately বলবে। 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' id='' placeholder='Enter Email' required />
                <br />
                {/* এখানে value={password} দিলে password fixed করে দিবে field এ তাই কোন password ই type করা যাবে না তাই defaultValue add করা হয়েছে।  */}
                <input type="password" name='password' onChange={handlePasswordOnChange} defaultValue={password} id='' placeholder='Enter Password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;