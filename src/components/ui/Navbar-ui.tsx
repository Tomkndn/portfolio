"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

interface NavProps {
  menuItems: string[];
}

const Nav: React.FC<NavProps> = ({menuItems}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);

  const menuChange = (idx: number, smallDev: boolean = false) => {
    setActive(idx);
    smallDev ? setIsMenuOpen(false) : null;
  };

  return (
    <Navbar
      maxWidth="2xl"
      height={"100px"}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-transparent -backdrop-saturate-0 backdrop-blur-sm"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-3",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "data-[active=true]:after:-backdrop-blur-0",
        ],
      }}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
        />
        <NavbarBrand className="lg:text-4xl lg:mt-5 text-2xl ">
          <p className="font-bold text-white">Tom</p>
          <span className="ms-2 font-bold text-blue-600 ">Kndn</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-7" justify="center">
        {menuItems.map((item: string, index: number) => (
          <NavbarItem isActive={active == index} key={`${item}-${index}`}>
            <Link
              color={index === active ? "primary" : "foreground"}
              className="text-xl"
              href="#"
              onPress={() => menuChange(index)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-transparent -backdrop-saturate-0 ">
        {menuItems.map((item: string, index: number) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === active ? "primary" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
              onPress={() => menuChange(index, true)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Nav;