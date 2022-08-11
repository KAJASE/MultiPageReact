import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [ 
  {
    id: 'q1',
    author: 'Karenine',
    text: 'Learning React'
  },
  {
    id: 'q2',
    author: 'Japiassu',
    text: 'Professional of React'
  },
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  );
};

export default AllQuotes;