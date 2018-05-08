import React, {Component} from 'react';

import './style/ChatSendBox.css';
import ChatToolBar from "./ChatToolBar";
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/github';
import {observer} from 'mobx-react';

@observer
class ChatSendBox extends Component {

    message = this.props.message;

    onChange = value => {
        this.message.draft = value;
        this.message.checkDraft();
    };

    render() {
        const message = this.message;
        return (
            <div className="ChatSendBox">
                <ChatToolBar message={message}/>
                <AceEditor
                    focus
                    mode="json"
                    theme="github"
                    showGutter={false}
                    width="100%"
                    height="170px"
                    fontSize={12}
                    name="ChatSendBox-Ace"
                    value={message.draft}
                    onChange={this.onChange}
                    editorProps={{$blockScrolling: Infinity}}
                    // onChange={this.onChange}
                    // setOptions={{s
                    //     enableBasicAutocompletion: false,
                    //     enableLiveAutocompletion: false,
                    //     enableSnippets: false,
                    //     showLineNumbers: false,
                    //     tabSize: 2,
                />
            </div>
        );
    }
}

export default ChatSendBox;