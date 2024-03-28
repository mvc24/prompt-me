import { Prompt } from '@/database/files/prompts';
import { getAllPrompts, getPromptById } from '@/database/prompts';
import { getRandomPromptId } from '@/util/functions';
import { useRouter } from 'next/navigation';
import { useReducer } from 'react';

type Props = {
  id: number;
};

export default async function PromptBox({ id }: Props) {
  const promptId = getRandomPromptId(1, 143);
  console.log('randomPromptId: ', promptId);
  const promptById = await getPromptById(promptId);

  if (!promptById) {
    return 'not found';
  }

  return (
    <>
      <div>
        <div>{promptById.prompt}</div>
      </div>
    </>
  );
}
