import { useContext } from "react";
import home from "../assets/images/home.svg";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-5">
      <img src={home} width={35} height={35} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="text"
          className="px-3 bg-transparent outline-none w-full"
          placeholder="Search Issue Number"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
      Header
    </div>
  );
};

export default Header;
