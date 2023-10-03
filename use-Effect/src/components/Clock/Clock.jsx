import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tickInterval = setInterval(() => {
      console.log("tick");
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      console.log("Clean up turn off my clock"); //Alex한테 물어볼것. 한번만 찍혀야 하는데.. 왜 mount될때, unmount될때 두번 찍히는지..
      clearInterval(tickInterval);
    };
  }, []);
  return <span>{currentTime.toLocaleDateString("en-US")}</span>;
};

export default Clock;
