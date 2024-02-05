import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

function Header() {
  return (
    <Navbar fluid className='bg-slate-900 py-4'>
      <NavbarBrand as={Link} href='/'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          PrivFi
        </span>
      </NavbarBrand>
      <NavbarToggle className='hover:opacity-30' />
      <NavbarCollapse className='border-none'>
        <NavbarLink href='#' active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href='#' className='border-none'>
          About
        </NavbarLink>
        <NavbarLink as={Link} href='#' className='border-none'>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default Header;
