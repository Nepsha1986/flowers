import { getSession } from "@auth0/nextjs-auth0";
import UserMenu from "./components/UserMenu";

async function SignIn() {
  const session = await getSession();

  return (
    <>
      {!!session?.user?.name ? (
        <UserMenu userName={session?.user?.name} />
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </>
  );
}

export default SignIn;
