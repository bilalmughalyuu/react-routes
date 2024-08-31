import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: 1,
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    id: 2,
    author: "Isaac Newton",
    text: "If I have seen further it is by standing on the shoulders of Giants.",
  },
  {
    id: 3,
    author: "Yoda",
    text: "Do, or do not. There is no try.",
  },
  {
    id: 4,
    author: "Mahatma Gandhi",
    text: "Be the change that you wish to see in the world.",
  },
  {
    id: 5,
    author: "Nelson Mandela",
    text: "It always seems impossible until it's done.",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
