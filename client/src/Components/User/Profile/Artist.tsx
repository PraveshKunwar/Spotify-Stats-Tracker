import React, { useEffect, useState } from "react";

const Artist: React.FC = () => {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(window.location.pathname.split("/")[2]);
  }, []);
  return <div>hello world</div>;
};
export default Artist;
