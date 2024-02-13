import Image from "next/image";
import { useRouter } from 'next/router';

export default function Projects() {
  const router = useRouter();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <br/>
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-7xl">
            Projects
        </h1>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        <div style={{background: 'crimson'}} onClick={() => router.push("/fallenGods")} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 mx-2 cursor-pointer">
          <h2 className={`text-2xl font-semibold`}>
            Fallen Gods{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                Ω
            </span>
          </h2>
          <h4 style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            My Resume, containing everything there is to know about me before hiring me
          </h4>
        </div>

        <div style={{background: 'darkgreen'}} onClick={() => router.push("/quickReload")} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 mx-2 cursor-pointer">
          <h2 className={`text-2xl font-semibold`}>
            Quick Reload{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ✧
            </span>
          </h2>
          <h4 style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            My Resume, containing everything there is to know about me before hiring me
          </h4>
        </div>

        <div style={{background: 'purple'}} onClick={() => router.push("/petStore")} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 mx-2 cursor-pointer">
          <h2 className={`text-xl font-semibold`}>
            HHM Pet Store{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ❅
            </span>
          </h2>
          <h4 style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            My Resume, containing everything there is to know about me before hiring me
          </h4>
        </div>

        <div style={{background: 'gray'}} onClick={() => router.push("/")} className="group rounded-lg border border-solid px-5 py-4 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-900/40 mx-2 cursor-pointer">
          <h2 className={`text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ⌂
            </span>
          </h2>
          <h4 style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            Return to the Home Menu
          </h4>
        </div>
      </div>
    </main>
  );
}
