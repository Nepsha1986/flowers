import { getSession } from "@auth0/nextjs-auth0";
import { UserOutlined } from "@ant-design/icons";

import UserMenu from "./components/UserMenu";

async function SignIn() {
  const session = await getSession();

  console.log(session);

  return (
    <>
      {!!session?.user?.name ? (
        <UserMenu imgSrc={session?.user?.picture} />
      ) : (
        <a href="/api/auth/login">
          <UserOutlined /> Sign In
        </a>
      )}
    </>
  );
}

export default SignIn;
