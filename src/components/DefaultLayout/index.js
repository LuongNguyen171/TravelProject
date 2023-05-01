import Header from './Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Login from '../Login';

import React, { useState } from 'react';
import UserContext from '../Hook/Context';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showLogin, setShowLogin] = useState(false);
    const handleLogin = (value) => {
        setShowLogin(value);
    };

    const isShow = showLogin ? <Login className={cx('login')} /> : null;
    return (
        <UserContext.Provider value={handleLogin}>
            <div className={cx('wrapper')}>
                <div className={cx('layout-default')}>
                    <Header className={cx('header')} />
                    <div className={cx('content')}>{children}</div>
                    <Footer className={cx('footer')} />
                </div>
                {isShow}
            </div>
        </UserContext.Provider>
    );
}

export default DefaultLayout;
