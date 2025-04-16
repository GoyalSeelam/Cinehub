interface NavbarItemProps {
    label: string;
    href?: string;
  }
  
  const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
    return (
      <a
        href={href || "#"}
        className="text-white cursor-pointer hover:text-gray-300 transition"
      >
        {label}
      </a>
    );
  };
  
  export default NavbarItem;
  