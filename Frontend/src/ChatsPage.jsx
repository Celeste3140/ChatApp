import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
    <PrettyChatWindow
      projectId="38216b1d-c0ec-47b3-a80b-0793174a0507"
      username={props.user.username} 
        secret={props.user.secret} 
      style={{ height: '100vh' }}
    />
    </div>
  );
};

export default ChatsPage;