import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';


class MessageList extends Component {

    componentWillUpdate(){
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate(){
        if(this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight;
        }    
        }

    render() {
        return (
            <div className="message-list">
                { this.props.messages.map( (message, index) => {
                    return(
                        <Message key={index} username={message.senderId} text={message.text} />
                    );
                } ) }
            </div>
        );
    }
}

export default MessageList;