import React, {Component} from 'react';

import './style/ChatBody.css';
import ChatMessage from "./ChatMessage";
import {observer} from 'mobx-react';

@observer
class ChatBody extends Component {
    end = React.createRef();
    body = React.createRef();

    scrollToBottom() {
        if (this.end.current) {
            this.end.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    render() {
        console.log('render');
        const message = this.props.message;
        return (
            <div className="ChatBody" ref={this.body}>
                <div className="ChatBody-Leading"/>
                {message.messages.map(
                    (msg, idx) => <ChatMessage value={msg} key={idx}/>
                )}
                <div ref={this.end}/>
            </div>
        );
    }
}

export default ChatBody;
