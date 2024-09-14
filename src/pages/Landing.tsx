import { Link } from "react-router-dom";
import ListingCard from "../components/UI/ListingCard";

const Landing = () => {
  return (
    <div className="py-[77px] px-[162px]">
      <h1>Landing</h1>
      <Link to="/listingDetails">Go</Link>
      <ListingCard />
    </div>
  );
};

export default Landing;
