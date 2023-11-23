import { useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase-config.js'

export const Chat =  (props) => {
    const [newMessage, setNewMessage] = useState("")

    const messagesRef = collection(db, "messages")

    const handleSubmit = async (e) => {
        console.log(newMessage)
        console.log(props.room)
        console.log(auth.currentUser.displayName)
        e.preventDefault();

        if(newMessage === "") return;
        console.log(messagesRef)
        console.log("-------- message ref -------")
        await addDoc(messagesRef, {
            text: newMessage,
            createAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            // room: props.room
        })

        setNewMessage("")
    }

    return (
        <div className="chat-app">
            <form onSubmit={handleSubmit} >
                <input
                    className="new-message-input"
                    placeholder="Type your message here"
                    onChange={e => setNewMessage(e.target.value)}
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    )
}