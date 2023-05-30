import { useEffect, useState } from "react";

const Form = ({ random }) => {
  const [number, setNumber] = useState();
  const [message, setMessage] = useState("");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [min, max, message]);

  const valid = () => {
    if (parseInt(number) === random) {
      setMessage("Bravo, vous avez trouvé en " + count + "essais");
    } else if (parseInt(number) <= random) {
      setMin(parseInt(number));
    } else if (parseInt(number) >= random) {
      setMax(parseInt(number));
    }

    setNumber("");
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={valid}>OK</button>
      <p>{message}</p>
      <p>
        Le nombre doit être compris entre {min} et {max}
      </p>
    </>
  );
};

export default Form;
