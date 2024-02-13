import Projects from "./projects.js"
import Education from "./education.js"
import HomePage from "./homepage.js"
import { Link } from 'react-router-dom';
import Image from "next/image";

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
          <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-3xl">
            How to Contact Me
          </h1>
        </div>
  
        <div className="mb-32 ml-60 grid justify-center text-center lg:max-w-7xl lg:w-[90%] lg:mb-0 lg:grid-cols-4 lg:text-center">
          <h1 className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
              <h3 className={`mb-3 text-2xl font-bold`}>
              Email{" "}
              </h3>
              <h3 className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                fred.vezina@hotmail.com
              </h3>
          </h1>

          <h1 className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
              <h3 className={`mb-3 text-2xl font-bold`}>
              Phone Number{" "}
              </h3>
              <h3 className={`m-0 max-w-[30ch] text-sm opacity-75`}>
                +1(438)-395-7153 (Personnal Cell Phone)
              </h3>
          </h1>

          <Link to="/" className="group rounded-lg border border-transparent px-10 py-10 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
            <h2 className={`text-2xl font-semibold`}>
              Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ⌂
              </span>
            </h2>
            <p style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
              Return to the Home Menu
            </p>
          </Link>
        </div>


      </main>
    );
}