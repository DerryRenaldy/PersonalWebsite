import QuotesContent from "./QuotesContent";

const Quotes = () => {
  return (
    <div className="flex flex-col h-full p-6 gap-y-4 font-rubik">
      <div className="text-2xl text-left">Quotes</div>
      <QuotesContent />
    </div>
  );
};

export default Quotes;
