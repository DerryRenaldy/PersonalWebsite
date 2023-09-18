import QuotesContent from "./QuotesContent";

const Quotes = () => {
  return (
    <div className="flex flex-col p-6 gap-y-4 h-full font-rubik">
      <div className="text-left text-2xl">Quotes</div>
      <QuotesContent />
    </div>
  );
};

export default Quotes;
