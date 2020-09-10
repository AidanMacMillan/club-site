import Head from 'next/head'
import Layout from '../../components/Layout'
import MemberList from '../../components/members/MemberList'

export default function MembersPage() {
	return <Layout title="Members">
		<MemberList></MemberList>
	</Layout>
}