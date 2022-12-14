import { useParams, Route, Link } from "react-router-dom";

import NoQuotesFound from "../components/quotes/NoQuotesFound";
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
    return <NoQuotesFound />
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
          </Link>
        </div>
      </Route>
      
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
      
    </section>
  );
};

export default QuoteDetail;