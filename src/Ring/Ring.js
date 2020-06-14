import React from 'react'
import styles from './styles.css'
export default function Ring() {
  return (
    <>
      <style>${`${styles}`}</style>
      <div className="ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
