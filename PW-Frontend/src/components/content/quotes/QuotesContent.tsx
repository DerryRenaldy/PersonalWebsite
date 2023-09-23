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
      "X-Idempotency-Key": "PTr64jUiNYVHUaexXG47FBzvNpgYfM9TmUZp",
    },
  };

  useEffect(() => {
    axios
      .post(
        url,
        {
          category: "happiness",
        },
        config
      )
      .then((res) => {
        setQuote(res.data.data.quote);
        console.log(res.data.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <p className="italic">"{quote}"</p>
    </div>
  );
};

export default QuotesContent;
