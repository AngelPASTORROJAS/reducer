import { useEffect, useState } from "react";
import Form from "./Form2";
import { Fragment } from "react";

const Find = () => {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <Fragment>
      <Form random={random} />
    </Fragment>
  );
};

export default Find;
