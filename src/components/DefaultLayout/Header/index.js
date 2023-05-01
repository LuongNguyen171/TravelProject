import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
//
import { useContext } from 'react';
import UserContext from '~/components/Hook/Context';

const cx = classNames.bind(styles);
function Header({ className }) {
    const [isLogin, setIsLogin] = useState(true);
    // const handleLogin = () => {
    //     setShowLogin(true);
    // };
    const handleLogin = useContext(UserContext);

    const handleStateLogin = () => {
        setIsLogin(!isLogin);
        handleLogin(isLogin);
    };
    return (
        <aside className={cx('wrapper', className)}>
            <header className={cx('header')}>
                <div className={cx('page')}>
                    <a>
                        <span>HOME</span>
                    </a>
                    <a>
                        <span>ABOUT</span>
                    </a>
                    <a>
                        <span>TRAVEL</span>
                    </a>
                    <a>
                        <span>LIFE</span>
                    </a>
                    <a>
                        <span>MOTHERHOOD</span>
                    </a>
                    <a>
                        <span>INSPIRE ME</span>
                    </a>
                    <a>
                        <span>SHOP</span>
                    </a>
                </div>
                {/* <div className={cx('logo')}>
                    <img src="https://cungdulich.com.vn/image/cache/catalog/logo/watermarkproshow-logo-web-400x300.png"></img>
                </div> */}
                <div className={cx('user-action')}>
                    <Button btnLogin small onClick={handleStateLogin}>
                        Login
                    </Button>
                    <div className={cx('icon-search')}>
                        <FontAwesomeIcon
                            className={cx('search')}
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </header>
        </aside>
    );
}

export default Header;
