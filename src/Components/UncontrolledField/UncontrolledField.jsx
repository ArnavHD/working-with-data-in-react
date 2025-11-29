import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(emailRef); // console.log() হবে {current: input}
        // console.log(emailRef.current); // <input type=" "..../>
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        
    } 


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='email' />
                <br />
                <input type="password" ref={passwordRef} name='password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;
