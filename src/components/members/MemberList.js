import Link from 'next/link'
import Profile from './Profile'
import styles from './MemberList.module.css'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'

export default function MemberList() {
	const { data, error } = useSWR('/api/users', fetcher)

	if(error) return <></>
	if(!data) return <></>

	return <div className={styles.memberList}>
		{getMemberItems(data)}
	</div>
}

function getMemberItems(users) { 
	return users.map((user) => {
		return <MemberItem key={user.username} firstName={user.firstName} lastName={user.lastName} username={user.username}></MemberItem>
	})
}

function MemberItem({ ...user }) {
    return <Link href="/members/[member]" as={"members/" + user.username}>
		<a className={styles.memberItem}>
			<div className={styles.profile}>
				<Profile user={user}></Profile>
			</div>
			<div className={styles.memberInfo}>
				<div className={styles.name}>
					<span className={styles.firstName}>
						{user.firstName + " "}
					</span>
					<span className={styles.lastName}>
						{user.lastName}
					</span>
				</div>
			</div>
		</a>
	</Link>
}