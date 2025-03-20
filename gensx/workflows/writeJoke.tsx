/** @jsxImportSource @gensx/core */

import * as gensx from '@gensx/core';
import { OpenAIChatCompletion, OpenAIProvider } from '@gensx/openai';

interface WriteJokeProps {  
  text: string;
}
interface WriteJokeResult {
  joke: string;
}
function WriteJoke(props: WriteJokeProps) {
  return (
    <OpenAIProvider apiKey={process.env.OPENAI_API_KEY}>
      <OpenAIChatCompletion
        model="gpt-4o-mini"
        messages={[
        { role: "system", content: "You are a helpful assistant that writes jokes that are dry, witty, and sarcastic." },
        { role: "user", content: `Write a joke related to the following text: "${props.text}"` }
        ]}
      >
        {(result) => {
          console.log(result);
          return { joke: result.choices[0].message.content };
        }}
      </OpenAIChatCompletion>
    </OpenAIProvider>
  )
}

export const WriteJokeComponent = gensx.Component<WriteJokeProps, WriteJokeResult>("WriteJoke", WriteJoke);

export const WriteJokeWorkflow = gensx.Workflow("WriteJoke", WriteJokeComponent); 