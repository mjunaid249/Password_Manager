import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between w-full bg-green-300 min-h-12 px-6">
      <div className="logo font-bold text-3xl ">PassOP</div>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
