import React from 'react'
import Phoenix, { setPhoenixSocket } from 'react-phoenix';
import { Socket } from 'phoenix-socket';

const socket = new Socket("ws://localhost:4000/socket", {
  params: {
    user_id: 'demo',
  },
});

setPhoenixSocket(socket);

const Demo = () => {
  return (
    <div>
      <h1>Demo</h1>
      <Phoenix
        channel="presence-lobby"
        event="channel:presences"
        onUpdate={(payload) => {
          console.log(payload);
        }}
      />
    </div>
  )
}
export default Demo
