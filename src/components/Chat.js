import { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase-config.js'

export const Chat =  (props) => {
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState([]);

    const messagesRef = collection(db, "messages")

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room" , "==", props.room), orderBy("createAt"))
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = []
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })

        return () => unsubscribe();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(newMessage === "") return;
        
        await addDoc(messagesRef, {
            text: newMessage,
            createAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: props.room
        })

        setNewMessage("")
    }

    return (
        <div className="chat-app">
            <div className="chat-wrapper"> {
                
                messages.map((message) => {
                    return (
                        <div className="chat" key={message.id}>
                            <b>{message.user}</b>
                            <h2> {message.text}</h2>
                        </div>
                    )
                })
                }
            </div>
            <form onSubmit={handleSubmit} >
                <input
                    className="new-message-input"
                    placeholder="Type your message here"
                    onChange={e => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    )
}