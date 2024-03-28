import { cache } from 'react';
import { sql } from './connect';
import { Prompt } from './files/prompts';

export const getAllPrompts = cache(async () => {
  const prompts = await sql<Prompt[]>`
    SELECT
      *
    FROM
      prompts
  `;
  return prompts;
});

export const getPromptById = cache(async (id: number) => {
  const [prompt] = await sql<Prompt[]>`
    SELECT
      *
    FROM
      prompts
    WHERE
      id = ${id}
  `;

  return prompt;
});
