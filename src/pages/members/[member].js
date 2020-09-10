import Head from 'next/head'
import Layout from '../../components/Layout'
import Member from '../../components/members/Member'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../../utils/fetcher'

export default function MemberPage() {
	const router = useRouter()
	const { member } = router.query

	const { data, error } = useSWR('/api/users/' + member, fetcher)

	if(error) return <></>
	if(!data) return <></>

	return <Layout title={data ? `${data.firstName} ${data.lastName} (${member})` : "Member"}>
			<Member user={data}></Member>
		</Layout>
}