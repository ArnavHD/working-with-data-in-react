import React from 'react';
import useInputField from '../../hooks/UseInputField';

// we can stop this repeatiting work by using custom hooks made by us
const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnchange] = useInputField('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit", name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange}/>
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name='email' />
                <br />
                <input type="password" defaultValue={password} onChange={passwordOnchange} />
                <br />
                <input type="submit"  value="submit" />
            </form>
        </div>
    );
};

export default HookForm;