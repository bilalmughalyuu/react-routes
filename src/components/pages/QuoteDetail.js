import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import { Fragment } from "react";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{params.quoteId}</p>
      <Routes>
        {/* The path is now relative */}
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
