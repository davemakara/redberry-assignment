import { Link } from "react-router-dom";
import ListingCard from "../components/UI/ListingCard";

const Landing = () => {
  return (
    <div className="py-[77px] px-[162px]">
      <h1>Landing</h1>
      <Link to="/listingDetails">Go</Link>
      <div className="w-full grid grid-cols-4 gap-5">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </div>
  );
};

export default Landing;
