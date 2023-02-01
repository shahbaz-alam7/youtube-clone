import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/subcription.css";
const Subscription = () => {
  const subscribedChannel = useSelector(
    (state) => state.data.subscribedChannel
  );
  console.log(subscribedChannel);
  return (
    <div>
      {subscribedChannel.length > 0 ? (
        subscribedChannel.map((item, i) => {
          return (
            <div className="subscribtion-box" key={i}>
              <Link to={`/channel/${item}`}>
                <h1>{item}</h1>
              </Link>
            </div>
          );
        })
      ) : (
        <h1>You haven't subscribe to any channel</h1>
      )}
    </div>
  );
};

export default Subscription;
