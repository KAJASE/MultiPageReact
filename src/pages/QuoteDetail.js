import { useParams, Route } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote) {
    return <p>No quote found!</p>
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
      
    </section>
  );
};

export default QuoteDetail;