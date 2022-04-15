import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutIconLink,
  Header,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
} from "./components";
import { FeedbackProvider } from "./context";
import { AboutPage } from "./views";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
