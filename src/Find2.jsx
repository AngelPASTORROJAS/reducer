import { useEffect, useState } from "react";
import Form2 from "./Form2";
import { Fragment } from "react";

const Find = () => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <Fragment>
      <Form2 random={random} />
    </Fragment>
  );
};

export default Find;
