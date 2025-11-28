import React from 'react';

const SimpleForm = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log("From submitted");
        // console.log(e) একটা object print করবে। যেখানে target অনেক important.
        // target কে point করলেই বঝা যাবে যে এই element টা কাকে point করতেসে। 
        // console.log(e.target); // আমাদের এই form টা return করবে।
        // console.log(e.target.name); // name নামের field টা পাব। <input type=" " name=" "> এমন ভাবে দিবে।  
        console.log(e.target.name.value); // এখন input field এ যা কিছু লিখব তাই console.log() করবে।  
        console.log(e.target.email.value); // এর টাও পাওয়া যাবে। 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' name='email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;