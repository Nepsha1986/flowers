import { getSession, Session } from "@auth0/nextjs-auth0";
async function SignIn() {
  const session = await getSession();

  return (
    <>
      {!!session?.user?.name ? (
        <span>
          Welcome {session?.user.name} <a href="/api/auth/logout">Logout</a>
        </span>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </>
  );
}

export default SignIn;
