import axios from "axios";
import { useEffect, useState } from "react";

const generateRandomWord = (): string => {
  const words = [
    "happiness",
    "experience",
    "future",
    "knowledge",
    "movies",
    "success",
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];
  return word;
};

const QuotesContent = ({ getText }: { getText: (text: string) => void }) => {
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const baseUrl = "http://localhost:3000/api/v1/";
  const path = "quotes";

  const defaultQuote =
    "Sound character provides the power with which a person may ride the emergencies of life instead of being overwhelmed by them. Failure is... the highway to success.Sound character provides the power with which a person may ride the emergencies of life instead of being overwhelmed by them. Failure is... the highway to success.";

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
          category: generateRandomWord(),
        },
        config
      )
      .then((res) => {
        setQuote(res.data.data.quote);
        setAuthor(res.data.data.author);
        // console.log(res.data.data.quote);
        // console.log(res.data.data.author);
        getText(res.data.data.quote);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-full flex-col gap-y-4">
      <p className="italic">"{quote == "" ? defaultQuote : quote}"</p>
      <p className="font-bold italic">-{author}-</p>
    </div>
  );
};

export default QuotesContent;
