import LOGO_IMG from "../../assets/image/LOGO.png";

const Header = () => {
  return (
    <header className="w-full h-[100px] border border-lightGray py-[38px] px-[162px]">
      <img src={LOGO_IMG} alt="redberry logo" className="w-[150px] h-[24px]" />
    </header>
  );
};

export default Header;
