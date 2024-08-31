import { Route, Routes, Navigate } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuotes from "./components/pages/NewQuote";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to="/quotes" />} />
        <Route path="/quotes" exact element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuotes />} />
      </Routes>
    </Layout>
  );
}

export default App;
