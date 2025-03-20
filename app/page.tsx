"use client";

import Image from "next/image";
import { useState } from "react";

// API call function to get a joke
async function getJoke() {
  try {
    const response = await fetch('/api/joke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'getJoke' }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting joke:', error);
    return { success: false, error: 'Failed to get joke' };
  }
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState("");
  
  const handleGetJoke = async () => {
    setIsLoading(true);
    try {
      const result = await getJoke();
      console.log('Joke result:', result);
      if (result.success && result.result && result.result.joke) {
        setJoke(result.result.joke);
      } else {
        console.error('No joke returned:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/gensx.svg"
          alt="Gensx logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing the workflow {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              gensx/workflows/writeJoke.tsx
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Run {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              npx gensx login
            </code>
            {" "}to get tracing and a live view of your workflow running. 
          </li>
        </ol>
        
        {joke && (
          <div className="mt-4 p-4 bg-black/[.05] dark:bg-white/[.06] rounded-lg max-w-lg w-full">
            <h3 className="font-semibold mb-2">Your Joke:</h3>
            <p>{joke}</p>
          </div>
        )}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={handleGetJoke}
            disabled={isLoading}
          >
            {isLoading ? 'Getting Joke...' : 'Get Joke'}
          </button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://gensx.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.gensx.com/docs/quickstart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Getting Started
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.gensx.com/docs/examples/blog-writing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://gensx.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to gensx.com →
        </a>
      </footer>
    </div>
  );
}
