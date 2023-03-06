import React from 'react'
import styles from './HomeNewsCard.module.scss'

const HomeNewsCard = ({ news }) => {
    const { title, text } = news
    return (
        <>
            <div className={styles.news_card}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default HomeNewsCard