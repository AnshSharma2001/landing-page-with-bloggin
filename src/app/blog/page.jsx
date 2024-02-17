import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const Blog = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <Link className={styles.item} href={`/blog/${post._id}`} key={post._id}>
          <div className={styles.imgContainer}>
            <Image 
              className={styles.img} 
              width={400} 
              height={250} 
              src={post.img} 
              alt='' 
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>

      ))}

    </div>
  )
}

export default Blog
