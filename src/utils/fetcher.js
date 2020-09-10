const fetcher = async (url) =>  {
	const res = await fetch(url)
	if(!res.ok) {
		throw Error("Bad Request")
	}
	return await res.json()
}

export default fetcher