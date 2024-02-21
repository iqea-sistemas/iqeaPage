"use client";
import React from "react";
import {
  DropdownGroup,
  DropdownItem,
  DropdownMenu,
  NavItem,
} from "@/components/DropDownMultiLevel/DropDown";
import { usePathname } from "next/navigation";
import {useTranslations} from 'next-intl';

export default function NavSistemas({navData}:any) {
  const t = useTranslations('NavLinks');

  const navSystems = navData
  const path = usePathname();



  const isActiveLink = (value: string) => {
    return `navLink ${value === path ? "active" : ""}`;
  };
  return (
    <NavItem
      title={t('Systems')}
      href={"/sistemas-de-tratamiento"}
      className={isActiveLink("/sistemas-de-tratamiento")}
    >
      <DropdownMenu>
        <DropdownGroup nameGroup="main">
          {navSystems &&
            navSystems.map((element: any) => {
              return (
                <DropdownItem
                  key={element.id}
                  href={`/sistemas-de-tratamiento/${element.slug}`}
                  goToMenu={element.productos ? element.slug : ""}
                >
                  {element.title}
                </DropdownItem>
              );
            })}
        </DropdownGroup>
      </DropdownMenu>
    </NavItem>
  );
}
