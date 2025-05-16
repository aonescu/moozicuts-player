import React from "react";

const songs = [
  {
    name: "Test Song",
    url: "https://tinyurl.com/moozicuts/01%20-%20Kyoto.flac"
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