import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/Landing";
import ListingDetails from "./pages/ListingDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/listingDetails" element={<ListingDetails />} />
      </Routes>
    </div>
  );
}

export default App;
