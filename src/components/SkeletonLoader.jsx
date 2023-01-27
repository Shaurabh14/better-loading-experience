import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const SkeletonLoader = ({ data }) => {
  const [loading, setLoading] = useState(true);

  //todo inside useEffect when the API call is complete set loading to false
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      {loading
        ? data.map((item, index) => (
            <Skeleton key={index}>
              {Object.keys(item).map((key, i) => (
                <Skeleton key={i}>{item[key]}</Skeleton>
              ))}
            </Skeleton>
          ))
        : data.map((item, index) => (
            <div key={index}>
              {Object.keys(item).map((key, i) => (
                <div key={i}>{item[key]}</div>
              ))}
            </div>
          ))}
    </>
  );
};

export default SkeletonLoader;
