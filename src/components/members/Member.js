import styles from './Member.module.css'
import Profile from './Profile'

export default function Member({ ...props }) {
    return <div className={styles.member}>
        <div className={styles.memberInfo}>
            <div className={styles.profileInfo}>
                <div className={styles.profileBackground}></div>
                <div className={styles.profile}>
                    <Profile user={props.user}></Profile>
                </div>
                <div className={styles.name}>
                    <span className={styles.firstName}>
                        {props.user.firstName + " "}
                    </span>
                    <span className={styles.lastName}>
                        {props.user.lastName}
                    </span>
                </div>
                <div className={styles.bio}>
                    {props.user.bio}
                </div>
            </div>
            {getSocials(props.user.socials)}
            
        </div>
        <div className={styles.showcase}></div>
    </div>
}

function getSocials(socials) {
    if(socials) {
        return <div className={styles.profileInfo}>
            <div className={styles.title}>Socials</div>
        </div>
    }
}