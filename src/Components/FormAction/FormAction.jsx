import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) =>{
        console.log(formData.get('name')); // value দেখাবে 
        console.log(formData.get('email')); // value দেখাবে 
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name='email' placeholder='Your Email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;