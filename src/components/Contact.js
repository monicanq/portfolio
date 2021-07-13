import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { projectFirestore, timestamp } from '../firebase/config';

const Contact = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        setIsPending(true);
        projectFirestore.collection("messages").add({
            name,
            email,
            message,
            receivedAt: timestamp()
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setIsPending(false);
            history.push('/');
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }
    
    return ( 
        <div className="contact">
            <h1 className='purple'>Let's see what we can build together</h1>
            
            <form onSubmit={handleSubmit}>
                <label>Name*</label>
                <input 
                    type="text"
                    required
                    value={name}
                    placeholder='My name is...'
                    onChange={(e) => setName(e.target.value)}
                />
                <label>email*</label>
                <input 
                    type="email"
                    required
                    value={email}
                    placeholder='my email address is...'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Message*</label>
                <textarea 
                    required
                    value={message}
                    placeholder= 'I want to talk about...'
                    onChange={(e) => setMessage(e.target.value)}
                    >
                </textarea>
                <p>* required fields</p>
               
                { !isPending && <button>Send</button> }
                { isPending && <button disabled>Sending...</button> }              
                
            </form>
        </div>
     );
}
 

export default Contact;