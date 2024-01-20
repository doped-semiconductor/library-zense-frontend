'use client'
import React, { useEffect } from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import {DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/dropdown"
import {ChevronDown} from "./Icons.jsx";
import {Button} from "@nextui-org/button"
import {Link} from "@nextui-org/link"

export default function NextDesktopNavBar() {
    interface NavItem {
        label: string,
        type: string,
        key: string,
        ext_url: string,
        children: NavItem[] | null
    }

    let navlist: NavItem[] = []

    const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    }
    useEffect(() => {
        function getNavigationDetails() {

        }
    }, [])

    // return(
    //     <nav className="next-desktop-nav">
            
    //     </nav>
    // )

    return (
    <Navbar shouldHideOnScroll isBlurred={false}>
      <NavbarContent className="hidden sm:flex gap-4 w-10/12 border-2 overflow-hidden overflow-x-scroll scroll-m-0" justify="start">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Home
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-full max-w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="academics"
              description=""
            >
             Academics   
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="login" aria-current="page" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="register" className="p-0 text-white font-bold text-lg bg-transparent data-[hover=true]:bg-transparent">
            Help
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}