import React from 'react';
import Image from "/workspaces/React-Tabs-and-Leaflets/vite-project/public/IMG_2484.jpg"

export default function MyImage() {
    return (
    <div>
      <h1>My React Component</h1>
      <img src={Image} width="200px" alt="Description of the image" />
    </div>
  );

}