import {useRouter} from 'next/router'

export default function Member() {
	const router = useRouter()
	const {member} = router.query

	return <div>{member}</div>
}