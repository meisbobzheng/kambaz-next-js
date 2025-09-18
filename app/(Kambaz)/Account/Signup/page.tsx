import Link from "next/link";
export default function Signup() {
	return (
		<div id="wd-signup-screen">
			<h3>Sign up</h3>
			<input placeholder="Enter a username." className="wd-username" />
			<br />
			<input placeholder="Enter your password" type="password" className="wd-password" />
			<br />
			<input
				placeholder="Verify your password"
				type="password"
				className="wd-password-verify"
			/>
			<br />
			<Link href="Profile"> Sign up </Link>
			<br />
			<Link href="Signin"> Sign in </Link>
		</div>
	);
}
