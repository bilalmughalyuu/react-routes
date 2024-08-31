import { Route, Routes, Navigate } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuotes from "./components/pages/NewQuote";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/quotes" />} />
      <Route path="/quotes" exact element={<AllQuotes />} />
      <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuotes />} />
    </Routes>
  );
}

export default App;
