import Link from "next/link";

export default function FallenGods() {
  return (
    <main id="mainPage" className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <br />
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-7xl mx-[35%]">
          Fallen Gods
        </h1>
      </div>

      <div className="mb-32 ml-40 grid justify-center text-center lg:max-w-7xl lg:w-[90%] lg:mb-0 lg:grid-cols-4 lg:text-center">

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 w-[110%] mx-16">
          <h2 className={`text-2xl font-semibold opacity-60`}>
            Download Temporarily Unavailable{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p style={{ fontWeight: 'bold' }} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            Come back later to Download Game
          </p>
        </div>

        <Link href="/projects" passHref className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 w-[100%] mx-16">
            <h2 className={`text-2xl font-semibold`}>
              Back{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
            </h2>
            <p style={{ fontWeight: 'bold' }} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
              Go Back to Projects
            </p>
        </Link>

        <Link href="/" passHref className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-red-900 hover:dark:border-4 hover:dark:bg-neutral-800/30 w-[100%] mx-16">
            <h2 className={`text-2xl font-semibold`}>
              Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                ⌂
              </span>
            </h2>
            <p style={{ fontWeight: 'bold' }} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
              Return to the Home Menu
            </p>
        </Link>

      </div>

    </main>
  );
}
