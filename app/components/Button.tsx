'use client';

import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter();
  const newPrompt = router.refresh;
  return <button onClick={newPrompt}>get a new prompt</button>;
}
