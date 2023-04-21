
import React from 'react'
import './Cards.css'
import { cardsData } from '../../Data/CardsData'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Cards = () => {
    return (
        <div className='container cards__container'>

            {
                cardsData.map(({ id, title, amount, percent, icon, desc }) => {

                    return (
                        <article className="card" key={id}>
                            <div className="card__top">
                                <h5>{title}</h5>
                                <div className="card__top-percent">
                                    <span>
                                        <MdKeyboardArrowUp />
                                    </span>
                                    <p>{percent}</p>
                                </div>
                            </div>

                            <div className="amount">
                                <h1>${amount}</h1>
                            </div>

                            <div className="card__bottom">
                                <p>{desc}</p>
                                <span>{icon}</span>
                            </div>
                        </article>
                    )
                })
            }

        </div>
    )
}

export default Cards