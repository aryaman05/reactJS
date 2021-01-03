import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../image/aryaman_resized.png';

import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
render() {
    return (
        <div className="condiv home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect className="typingeffect" text={['I am Aryaman','I am a web developer']} speed={100} eraseDelay={700}/>
        </div>
    )
}
}
export default Home