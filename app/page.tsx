import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              5 Favorite Support tasks
            </h5>
            <ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <li>
                Manage a support team - I'm particularly good at this. :)
              </li>
              <li>
              Run ticket review sessions to make sure tone is consistent - Especially excellent or especially "not" excellent examples can be logged for review time. 
              </li>
              <li>
              Dig through logs to troubleshoot a customer&apos;s broken project - I enjoy fixing things for people and bringing a smile to their face. 
              That's how I graviitated towards support in the beginning.
              </li>
              <li>
              Work with the product team to develop a new feature based on feedback from customers - Support interacts with customers daily with plenty of feedback 
              that can be provided to the Product and/or Engineering team. The feedback is that much more valuable when the customers are developers themselves. 
              </li>
              <li>
              Write and maintain support articles and docs pages - External KB to customers as well as internal documentation that can be easily followed. 
              Reduces tickets, reduces support time, reduces overall cost as a result. Especially fun when it's something new and extra techy!
              Docs should never be done! They are "forever-changing" and a "source of truth" for the entire team. 
              </li>
            </ul>
      </div>

      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              5 Least Favorite Support tasks
            </h5>
            <ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <li>
                Help resolve billing issues for customers - Working in a startup and wearing many hats, I have done this. Canceling folks for non-payment is not enjoyable.
              </li>
              <li>
                Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites - I wouldn't mind this so much at all actually, however it is in the least 5 
                simply because if I had to choose, other items in the list would be preferable. 
              </li>
              <li>
                Create video tutorials to help teach users a specific feature or use case - Same reason as above. 
              </li>
              <li>
                Work with people to figure out if Vercel is suitable for their use case - I might enoy this after I am fully versed in all of Vercel's offerings.
                I have previosuly joined sales calls to help confirm or explain technical solutions for potential customers. 
              </li>
              <li>
               Work with 3rd party partners to track down a tricky situation for a joint customer - I might enjoy this as well. It was really difficult to choose 5 least favorite
               tasks in support since I don't overly dislike any of them. (Well, maybe billing, however that completely depends on the context.)
              </li>
            </ul>

      </div>


      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        What do you want to learn or do more of at work?
        </h5>
          <ul>
            <li>
              All the new tech! Every single piece that I can get my hands on. If my team is supporting it, I want to be in the know.
            </li>
          </ul>
        </div>

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?
        </h5>
          <ul>
            <li>
            We received alerts from our support engineers about a sudden surge in carding attacks targeting a significant number of stores. Carding attacks involve cybercriminals using stolen credit card details to check their validity through automated scripts posting to guest checkouts. To counteract this wave of attacks originating from diverse IP addresses and seemingly legitimate user agents, I developed an Autobanning tool in python which effectively identified and automatically blocked this malicious traffic, significantly hampering the attackers' efforts. 
            The countermeasure proved highly effective until the developer team could address the underlying issue in their Ecommerce store, rectifying the checkout vulnerability that had been exploited to misuse the payment API. This effectively saved some of our largest accounts (Itsugar, Oreo, Sourpatch) and the concept was eventually built in to the Webscale SaaS Cloud Security. You can read more about it here: https://www.webscale.com/blog/itsugar-is-sweet-on-webscales-expertise/
            </li>
          </ul>
        </div>

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
        </h5>
          <ul>
            <li>
            Edge Functions - lightweight JavaScript functions that execute close to the user geographically. Use case would be retreiving data from an external API using fetch.
            Serverless - Node.js APIs, use-case could be the need to to write to a file
            Edge Middleware - executes before a request is processed. Bot protection would be a good case for this. 
            </li>
          </ul>
        </div>

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
        </h5>
          <ul>
            <li>
            Hello, [customer's name here]. I see you are working with the [ABC] framework. I located the offical [ABC] troubleshooting guide here https://fakeurltofakeframework. 

            If I can't determine which part exactly they are stuck on by looking at their account. I would add "Please let us know which portion you are working on and any error messages you are receiving" and perhaps we can iron out the issue together". 

            If I CAN see which part they are stuck in by looking at their account. I would pinpoint it like: 
            The error message you are receving, "Can not use fetch on null constant ABC_KEY" means your framework is missing the needed ABC_KEY environment 
            variable in order to authorize. You should be able to find this variable in your .env file according to their documentation here: https://fakeurltofakeframework. 
            Information on how to add these variables is located here: https://vercel.com/docs/projects/environment-variables
            </li>
          </ul>
        </div>

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        The customer from question 5 replies to your response with: “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out.
        It must be a platform issue so just fix it for me instead of asking me questions.”
        Please write a follow-up reply to the customer.
        </h5>
          <ul>
            <li>
              Hello, [customer's name here]. 
              Are there any specific pieces of the documentation that I may assist you with? I would be happy to assist you through them. While I cannot directly
              edit your environemnt, I would be happy to guide you step by step through the process.

              This is the link to the settings page of your app: https://vercel.com/jackies-projects-c62beaed/nextjs-happiness/settings/environment-variables
              Look for the area where you can add a key and value provided to you by ABCKEY, then click SAVE.
              Let me know if this solves the issue for you! I am standing by. 

            </li>
          </ul>
        </div>


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
