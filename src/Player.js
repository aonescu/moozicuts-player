import React from "react";

const songs = [
  {
    name: "Kyoto - Yung Lean",
    url: "https://bf7d-2a00-1858-1028-8442-587c-dcfe-637a-b865.ngrok-free.app/01-Kyoto.mp3"
  },
  // add more if needed
];

export default function Player() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Moozicuts</h1>
      {songs.map((song, idx) => (
        <div key={idx} style={{ marginBottom: 20 }}>
          <p>{song.name}</p>
          <audio controls src={song.url} style={{ width: "100%" }} />
        </div>
      ))}
    </div>
  );
}