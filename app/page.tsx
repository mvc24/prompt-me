import { getPromptById } from '@/database/prompts';
import Button from './components/Button';
import PromptBox from './components/PromptBox';

type Props = {
  id: number;
  prompt: string;
};

export default function Home(props: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <PromptBox id={props.id} />
        <Button />
      </div>
    </main>
  );
}
