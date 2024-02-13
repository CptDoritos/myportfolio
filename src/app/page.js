import HomePage from "../components/pages/homepage.js"
import Projects from "../components/pages/projects.js"
import Education from "../components/pages/education.js"
import Contact from "../components/pages/contact.js"
import FallenGods from "../components/pages/fallengods.js"
import QuickReload from "../components/pages/quickreload.js"
import PetStore from "../components/pages/petstore.js"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/"><a>Home</a></Link>{' '}
        <Link href="/projects"><a>Projects</a></Link>{' '}
        <Link href="/education"><a>Education</a></Link>{' '}
        <Link href="/contact"><a>Contact</a></Link>{' '}
        <Link href="/fallenGods"><a>Fallen Gods</a></Link>{' '}
        <Link href="/quickReload"><a>Quick Reload</a></Link>{' '}
        <Link href="/petstore"><a>Pet Store</a></Link>
      </nav>
      <main>
        <h1>Welcome to Next.js!</h1>
      </main>
    </div>
  );
}
