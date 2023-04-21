
import { HiOutlineUsers } from 'react-icons/hi'
import { BsCart2 } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'




export const cardsData = [
    {
        id: 1,
        title: 'USERS',
        amount: 875,
        percent: +6,
        icon: <HiOutlineUsers />,
        desc: 'See all users'
    },
    {
        id: 2,
        title: 'ORDERS',
        amount: 3321,
        percent: +9,
        icon: <BsCart2 />,
        desc: 'View all orders'
    },
    {
        id: 3,
        title: 'EARNINGS',
        amount: 5.7,
        percent: +12,
        icon: <RiMoneyDollarCircleLine />,
        desc: 'View all earnings'
    },
    {
        id: 4,
        title: 'MY BALANCE',
        amount: 10.2,
        percent: +6,
        icon: <MdOutlineAccountBalanceWallet />,
        desc: 'See details'
    },
]