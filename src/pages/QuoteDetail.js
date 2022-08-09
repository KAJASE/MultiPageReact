import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote detail page</h1>
      <p>{params.quoteId}</p>
    </section>
  );
};

export default QuoteDetail;