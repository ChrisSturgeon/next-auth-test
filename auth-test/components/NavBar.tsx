import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { DefaultSession } from 'next-auth';

interface NavBarProps {
  user: DefaultSession['user'];
  signIn: Function;
  signOut: Function;
}

export default function NavBar({ user, signIn, signOut }: NavBarProps) {
  if (user) {
    return (
      <nav className={styles.navbar}>
        <h1>Session Hub</h1>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <div className={styles.user}>
          <p>Signed in as {user.name}</p>
          {user.image !== null && (
            <img src={user.image} alt="Users profle pic"></img>
          )}

          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <h1>Session Hub</h1>
      <div className={styles.user}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    </nav>
  );
}
