import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

const ResizableDraggableBox = () => {
  // Load saved position and size from localStorage
  const savedState = JSON.parse(localStorage.getItem("boxState")) || {
    width: 200,
    height: 150,
    x: 0,
    y: 0,
  };

  const [size, setSize] = useState({
    width: savedState.width,
    height: savedState.height,
  });
  const [position, setPosition] = useState({
    x: savedState.x,
    y: savedState.y,
  });

  // Save to localStorage whenever size or position changes
  useEffect(() => {
    localStorage.setItem("boxState", JSON.stringify({ ...size, ...position }));
  }, [size, position]);

  return (
    <Rnd
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
        console.log(pos);
      }}
      style={{
        background: "lightblue",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Resize & Drag Me
    </Rnd>
  );
};

export default ResizableDraggableBox;
