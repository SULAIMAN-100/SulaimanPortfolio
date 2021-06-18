import React, { useEffect, useState } from "react";

import "./Home.css";

export function Home() {
  const [time, setTime] = useState("");

  function showTime() {
    var d = new Date();
    setTime(d.toLocaleTimeString());
  }

  useEffect(() => {
    const interval = setInterval(showTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home fadeIn">
      <div className="content">
        <div className="summary">
          <h2>ARTS & TECH</h2>
        </div>
        <div className="fulltime">
          <div className="time"> {time}</div>
          <div className="date">{new Date().toString().slice(0, 16)}</div>
        </div>
      </div>

      {/* <div className="arrow">
        <a href="#" class="previous-round">
          &#8249;
        </a>
        <a href="#" class="next-round">
          &#8250;
        </a>
      </div> */}
    </div>
  );
}

export default Home;
