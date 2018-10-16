import React from 'react';
import Phoenix, { setPhoenixSocket } from 'react-phoenix';
import { Socket } from 'phoenix-socket';

export default class Index extends React.Component {
  componentDidMount() {
    const socket = new Socket("ws://localhost:4000/socket", {
      params: {
        user_id: 'demo',
      },
    });

    setPhoenixSocket(socket);
  }
  render() {
    return (
      <>
        <div>Welcome to next.js!</div>
        <Phoenix
          channel="foo"
          event="bar"
          onUpdate={(payload) => {
            console.log(payload);
          }}
        />
      </>
    )
  }
}
