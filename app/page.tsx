// app/page.tsx
import Header from '../components/Header';
import Features from '@/components/Feature';

const FEATURES_DATA = [
  {
    title: 'OpenType features',
    subtitle: 'Variable fonts',
    description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
  },
  {
    title: 'Design with real data',
    subtitle: 'Fastest way to take action',
    description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
  },
  {
    title: 'Fastest way to',
    subtitle: 'Take action',
    description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
  }
];


export default function Home() {
  return (
    <main>
      <Header />
      <Features features={FEATURES_DATA} />
    </main>
  );
}
