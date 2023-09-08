import Link from 'next/link'

export default function About(){
	return(
		<div className="flex flex-col justify-center items-center h-56 bg-slate-200">
			<h1 className="text-4xl my-2">Welcome to LinkedIn</h1>
			<Link href="/" className="my-btn">Go to Home Page</Link>
		</div>
		)
}