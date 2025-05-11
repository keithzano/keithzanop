type Work = {
  company: string;
  position: string;
  location: string;
  dates: string;
  duties: string[];
};

export const WorkCard = ({ work }: { work: Work }) => {
  return (
    <article className="group bg-background hover:bg-muted/50 space-y-4 rounded-lg p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md">
      <div className="flex flex-col justify-between space-y-6 md:flex-row">
        <div>
          <h3 className="group-hover:text-primary text-lg font-semibold transition">
            {work.position}
          </h3>
          <h4 className="text-muted-foreground text-sm italic">
            {work.company}
          </h4>
        </div>
        <div className="md:text-right">
          <h3 className="text-base font-medium">{work.location}</h3>
          <h4 className="text-muted-foreground text-sm italic">{work.dates}</h4>
        </div>
      </div>
      <ul className="marker:text-primary list-disc space-y-1 pl-5 marker:text-2xl">
        {work.duties.map((dutie, index) => (
          <li key={index} className="ps-2">
            {dutie}
          </li>
        ))}
      </ul>
    </article>
  );
};
