// import styles from '../styles/SiteNavigation.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import NavBar from './NavBar';
import { GetServerSideProps } from 'next';

export default function SiteNavigation() {
  const { data: session } = useSession();

  return <NavBar user={session?.user} signIn={signIn} signOut={signOut} />;
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
