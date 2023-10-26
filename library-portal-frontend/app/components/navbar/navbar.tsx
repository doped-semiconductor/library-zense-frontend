'use client'
import styles from '../navbar/navbar.module.css'
import React from 'react'
import Hamburger from 'hamburger-react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Navbar = (props: any) => {
  return (
    <div className={styles.navigationBar}>
      <div className={styles.menuIcon}>
        <Hamburger size={27} color='black'/>
      </div>

      <h1 className={styles.header}> IIIT BANGALORE LIBRARY</h1>

      <div className={styles.userProfile}>
        <p> Zense User </p> {/* user name*/}
        <span className='profile-icon'> 
            <img src="../../profile.png" alt="profile-pic" className={styles.profilePic}/>
        </span>
        <RiArrowDropDownLine size={25} color='black'/>
      </div>
    </div>
  )
}

export default Navbar
