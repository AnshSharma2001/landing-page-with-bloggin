import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: "Ansh Dev Contact Page",
  description: "This is the contact page. ",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let{`'`}s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>

        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}/>
          <input type="text" placeholder='email' className={styles.input}/>
          <textarea className={styles.textarea} placeholder='message' cols="30" rows="10"></textarea>
          <Button text='Send' url='#'/>
        </form>

      </div>

    </div>
  )
}

export default Contact
