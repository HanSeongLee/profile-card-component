import React from 'react';
import styles from './style.module.scss';

const ProfileCard = ({
                         background, avatar, username, age,
                         location, followers, likes, photos
                     }) => {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });

    return (
        <div className={styles.profileCard}>
            <div className={styles.cardHeader}>
                <img className={styles.cardBackground}
                     src={background}
                     alt={''}
                />
            </div>
            <div className={styles.cardBody}>
                <img className={styles.avatar}
                     src={avatar}
                     alt={username}
                />
                <div>
                    <h1>
                        {username}
                    </h1>
                    <span>{age}</span>
                </div>
                <div className={styles.locationText}>
                    {location}
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div>
                    <div className={styles.numberText}>
                        {formatter.format(followers)}
                    </div>
                    <div className={styles.indicatorText}>
                        Followers
                    </div>
                </div>
                <div>
                    <div className={styles.numberText}>
                        {formatter.format(likes)}
                    </div>
                    <div className={styles.indicatorText}>
                        Likes
                    </div>
                </div>
                <div>
                    <div className={styles.numberText}>
                        {formatter.format(photos)}
                    </div>
                    <div className={styles.indicatorText}>
                        Photos
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
