import React from 'react';
import './header.css';
import { moneyFormat } from '../../Helper';

const Header = ({ total, money }) => {
    return (
        <>
            {total > 0 && money - total !== 0 && (
                <div className='header'>
                    Yeni il üçün xercleyeceyiniz <span>{moneyFormat(money-total)}</span>azn qaldi.

                </div>
            )}
            {
                total == 0 && (
                    <div className='header'>
                        Yeni il üçün büdce <span>{moneyFormat(money)} </span> azn.

                    </div>
                )}
            {
                money - total === 0 && (
                    <div className='header'>Bütün pulu xercledin</div>
                )
            }

        </>
    )
}

export default Header
