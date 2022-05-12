import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'

import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['manu-container']}>
        {/* <ActiveLink text='home'    href="/">Home</ActiveLink>
        <ActiveLink text='about'   href="/about">About</ActiveLink>
        <ActiveLink text='contat'  href="/contact">Contact</ActiveLink> */}
        {
          menuItems.map( item=>(
            <ActiveLink text={item.text} href={ item.href } key={ item.href }/>
          ))
        }
    </nav>
  )
}
