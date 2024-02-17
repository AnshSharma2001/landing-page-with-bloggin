import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">Ansh Sharma. All rights reserved.</div>
      <div className={styles.social}>
        
        <Link href=''>
          <Image 
            src='/1.png' 
            className={styles.icon} 
            alt='facebook-icon' 
            width={15} 
            height={15} 
          />
        </Link>
        
        <Link href=''>
          <Image 
            src='/2.png' 
            className={styles.icon} 
            alt='instagram-icon' 
            width={15} 
            height={15} 
          />
        </Link>
        
        <Link href=''>
          <Image 
            src='/3.png' 
            className={styles.icon} 
            alt='twitter-icon' 
            width={15} 
            height={15} 
          />
        </Link>
        
        <Link href=''>
          <Image 
            src='/4.png' 
            className={styles.icon} 
            alt='youtube-icon' 
            width={15} 
            height={15} 
          />
        </Link>
        
      </div>
    </div>
  )
}

export default Footer
