import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { useStateValue } from './StateProvider';
function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        // Some Clever Db Stuff
        setInput('')
        setimageUrl('')
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input value={input} 
                    onChange={e => setInput(e.target.value)}
                    className="messageSender__input" type="text" placeholder = {`what's on your mind ${user.displayName}? `} ></input>
                    <input
                    value={imageUrl}
                    onChange={e => setimageUrl(e.target.value)}
                    type="text" placeholder="Image URL (Optional)"></input>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__button">
                <div className="messageSender__option">
                    <VideocamIcon
                    style={{ color: "red" }} />
                    <h3>Live Video</h3>
                    </div>
                <div className="messageSender__option">
                <PhotoLibraryIcon
                style={{ color: "green" }} />
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon
                    style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
