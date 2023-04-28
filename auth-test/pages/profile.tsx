import { useSession, signIn, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { GetServerSideProps } from 'next';

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Profile Page</h1>
        <p>Signed in as {session.user?.name}</p>
        {session.user?.image !== null && (
          <img src={session.user?.image} alt="profile image"></img>
        )}
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      props: {},
    };
  }

  return {
    props: {
      session,
    },
  };
};
