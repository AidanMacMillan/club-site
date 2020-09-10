import styles from './Profile.module.css'

export default function Profile({ ...props }) {
    if(props.user.profile) {

	} else {
		return <div className={styles.profileDefault}>
			<div className={styles.profileDefaultText}>
				{props.user.firstName[0] + props.user.lastName[0]}
			</div>
		</div>
	}
}