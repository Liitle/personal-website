export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`container max-w-screen-lg mx-auto px-4`}>{children}</div>
      <footer className='bg-brand-secondary p-4 text-white'></footer>
    </>
  );
}
