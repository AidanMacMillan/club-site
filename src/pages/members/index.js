import Head from 'next/head'

import Layout from '../../components/Layout'
import MemberList from '../../components/members/MemberList'

export default function Members() {
	return <>
		<Head>
			<title>Members</title>
		</Head>
		<Layout>
			<MemberList></MemberList>
		</Layout>
	</>
}