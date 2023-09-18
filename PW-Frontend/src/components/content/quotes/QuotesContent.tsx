import axios from "axios";
import { useEffect, useState } from "react";

const QuotesContent = () => {
  const [quote, setQuote] = useState<string>("");
  const baseUrl = "http://localhost:3000/api/v1/";
  const path = "quotes/?category=happiness";

  const url = baseUrl + path;
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        setQuote(res.data.data.quote);
        console.log(res.data.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="italic">"{quote}"</div>
    </div>
  );
};

export default QuotesContent;
