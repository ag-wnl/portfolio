import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
    <main className="flex flex-col gap-[2rem] items-center max-w-3xl p-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">hi, im agwnl</h1>
        <p>
          im a developer who builds mostly on the web, interested in
          decentralisation and algorithmic problems. since end of freshman year in college ive almost always been interning
          and building passion projects. started out in ml research, moved to a
          f500 and then to a cool web3 org. learned a lot while working
          alongside amazing people at my various stints and also got my code
          serving lots of people!
        </p>
        <p>
        </p>
      </section>

      <section className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-bold">projects</h1>
        <p>a lot of my projects are on github</p>

        <ul className="list-disc pl-5">
          <li className='mb-2'>
            <span className="text-purple-300 font-bold">readerai</span>: helps you
            annotate/take notes across the web seamlessly in a new way, answer
            prompts and everything just a click away!
          </li>
          <li className='mb-2'>
            <span className="text-purple-300 font-bold">clensify</span>: A
            profanity/bad-word detection library which uses extensive
            anti-bypass techniques and multi stage detection outperforming
            conventional detection methods. text pre-processing to decode zalgo,
            bubble-text, leetspeak etc. & bloom filtering with contextual embeddings.
          </li>
          <li className='mb-2'>
            <span className="text-purple-300 font-bold">stoira</span>: helping talent
            collaborate, a social platform with thread like chat scheme where
            you can discover/find interesting projects to collaborate on.
          </li>
          <li>
            <span className="text-purple-300 font-bold">slider</span>: find all big-tech
            and high growth startup openings on a single platform, focused for
            early career/internships. motivation for this was for personal ease
            to not juggle between several platforms when finding internships and
            to also help my friends out :)
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-bold">socials</h1>
        <div className="flex gap-4">
          <a
            href="https://github.com/ag-wnl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/github.png" alt="github" />
          </a>
          <a
            href="https://linkedin.com/in/agnideep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://x.com/ag_wnl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/twitter.png" alt="x.com" />
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-bold">on chain</h1>
        <div className="flex gap-4">
          <a
            href="https://solscan.io/account/FXYJDFZ7TnWBvgnuWUDjCfanxULNNp4aeEddaoHM5Brv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/solana.png" alt="solana" />
          </a>
          <a
            href="https://ethplorer.io/address/0x1894db905f1c473d94ccc80ab4d982416342d549"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/ethereum.png" alt="ethereum" />
          </a>
          <a
            href="https://www.mintscan.io/osmosis/address/osmo1w787nw0k7pux6v9al8sqg6y8hk3ycxpl043aa2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-gray-300"
          >
            <Image width={100} height={100} src="/cosmos.png" alt="cosmos" />
          </a>
        </div>
      </section>
    </main>
    </div>
  );
}
