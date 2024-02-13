import { Link } from 'react-router-dom';
import { createContext } from 'react'
import Image from "next/image";
import imgQ from "../images/QuickReload.PNG"

const Context = createContext();
export default function QuickReload() {

    return (
      <main style={{ backgroundImage: `url(${imgQ.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
            <br/>
            <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-7xl mx-[35%]">
                Quick Reload
            </h1>
          </div>
    
          <div className="mb-32 ml-40 grid justify-center text-center lg:max-w-7xl lg:w-[90%] lg:mb-0 lg:grid-cols-4 lg:text-center">

            <a
              href="https://cptdoritos.itch.io/quick-reload"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`text-2xl font-semibold`}>
                Download{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                Download the Game
            </p>
            </a>

            <Link to="/projects" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
              <h2 className={`text-2xl font-semibold`}>
                Back{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &lt;-
                </span>
              </h2>
              <p style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
                Go Back to Projects
              </p>
            </Link>

            <Link to="/" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
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