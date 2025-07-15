import CompanionCard from '@/components/CompanionCard';

const Page = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#fsdgdse'
        />
        <CompanionCard
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#fsdgdse'
        />
        <CompanionCard
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#fsdgdse'
        />
      </section>
    </main>
  );
};

export default Page;
