import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.navs}>
                    <div className={styles.l}>
                        <Link to='/' className={styles.homeLink}>
                            Home
                        </Link>
                    </div>
                    <div className={styles.l}>
                        <Link to='/shop' className={styles.homeLink}>
                            Products
                        </Link>
                    </div>
                    <div className={styles.l}>
                        <Link to='/cart' className={styles.homeLink}>
                            Cart
                        </Link>
                    </div>
                </div>
                {
                    !currentUser && (
                        <div className={styles.buttons}>
                            <div className={styles.login}>
                                <Link to='/signin'>
                                    <button>LogIn</button>
                                </Link>
                            </div>
                            <div className={styles.signup}>
                                <Link to='/signup'>
                                    <button>SignUp</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
                {
                    currentUser && (
                        <div className={styles.profilePicture}>
                            <Link to='/profile'>
                                <img src={currentUser.data.profilePicture} className={styles.profileimage} alt="profile" />
                            </Link>
                            <div className={styles.signoutHover}>
                                Signout
                            </div>
                        </div>
                    )
                }
        
            </div>
        </div>
    );
};

export default NavigationBar;
