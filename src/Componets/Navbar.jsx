import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,

} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IoLayersOutline } from "react-icons/io5";

const menuItems = [
  {
    titulo: "Ejemplo",
    ref: "/Ejemplos",
  },
  {
    titulo: "Preview",
    ref: "/Aprendamos",
  },
  {
    titulo: "¿Quienes Somos?",
    ref: "/Conclusion",
  },
];

export default function Barra() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      const closeMenu = () => setIsMenuOpen(false);
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isMenuOpen]);

  const NavbarContentEnd = () => {
    return (
      <NavbarContent justify="end">
      </NavbarContent>
    );
  };
  function closeCurrentWindow() {
    window.open("", "_self");
    window.close();  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="border-b"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IoLayersOutline />

          <Link to="/RevistaSeminario">
            <p className="font-bold text-inherit">TRAVELING CONDOR</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" to={item.ref}>
              {item.titulo}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContentEnd />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.titulo}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full "
              to={item.ref}
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.titulo}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
