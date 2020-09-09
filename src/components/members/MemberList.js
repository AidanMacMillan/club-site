import styles from './MemberList.module.css'
import useSWR from 'swr'

const fetcher = async (url) =>  {
	const res = await fetch(url)
	if(!res.ok) {
		throw Error("Bad Request")
	}
	return await res.json()
}

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
		return <MemberItem key={user.username} firstName={user.firstName} lastName={user.lastName}></MemberItem>
	})
}

function MemberItem({ ...props }) {
    return <div className={styles.memberItem}>
        {props.firstName} {props.lastName}
    </div>
}