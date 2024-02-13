import ReactPlayer from 'react-player';
import imgP from "../images/HHM.png";
import { Link } from 'react-router-dom';

export default function PetStore() {
  const videosrc = "/app/videos/petstorevideo.mp4";

  return (
    <main style={{ backgroundImage: `url(${imgP.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <br/>
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-7xl mx-[35%]">
            HHM Pet Store
        </h1>
      </div>
      <ReactPlayer
        width={500}
        height={500}
        url={`https://youtu.be/uQNtZqRrC-8`}
        controls={true}
        light={false}
        pip={true}
      />

      <video controls className="my-5" width={500} height={500}>
        <source src={videosrc} type="video/mp4" />
      </video>

      <div className="mb-32 ml-40 grid justify-center text-center lg:max-w-7xl lg:w-[90%] lg:mb-0 lg:grid-cols-4 lg:text-center">

        <a
          href="https://slcqc-my.sharepoint.com/:f:/g/personal/2030167_champlaincollege_qc_ca/EklQMo_7k85AkpPr_LYtx68BV5dPGjvMgLkQIAkZgEbb_g?e=CmHetf"
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
            Download the App
          </p>
        </a>

        <Link href="/projects">
          <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
            <h2 className={`text-2xl font-semibold`}>
              Back{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
              </span>
            </h2>
            <p style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
              Go Back to Projects
            </p>
          </a>
        </Link>

        <Link href="/">
          <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mx-5">
          <h2 className={`text-2xl font-semibold`}>
            Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ⌂
            </span>
          </h2>
          <p style={{fontWeight: 'bold'}} className={`m-0 max-w-[30ch] text-sm opacity-60`}>
            Return to the Home Menu
          </p>
        </a>
        </Link>

      </div>

    </main>
  );
}
