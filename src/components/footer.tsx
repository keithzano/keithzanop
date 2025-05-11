export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 lg:py-12 xl:px-38">
      <div className="container mx-auto px-4 sm:grid sm:grid-cols-3">
        <div className="flex items-end">
          <p className="text-sm">
            ©{year} - Built with Next.js, shadcn and 47 open tabs
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-sm">
            Need a website? Let’s talk before AI replaces both of us.
            <br />
            Reach out for freelance work, mentorship, or to debate whether
            developers really understand how computers work.
          </p>
        </div>
        <div className="flex items-end justify-end">
          <p className="text-end text-sm">
            No cookies here. Not the tasty kind, not the creepy tracking kind.
          </p>
        </div>
      </div>
    </footer>
  );
};
