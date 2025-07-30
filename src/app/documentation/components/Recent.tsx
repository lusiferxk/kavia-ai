import Link from "next/link";

interface RecentDataProps {
  name: string;
  link: string;
}

export interface RecentData {
  data: RecentDataProps[];
}

const Recent: React.FC<RecentData> = ({ data }) => {
  const previous = data[0];
  const next = data[1];

  return (
    <section className="w-full rounded-xl border border-[#2a2a2a] bg-[#302c2d] px-4 py-5 flex justify-between items-center">
      {previous && (
        <div className="text-left">
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Previous</div>
          <Link href={previous.link} className="text-white underline text-xs sm:text-sm hover:text-[#f97316] transition">
            {previous.name}
          </Link>
        </div>
      )}

      {next && (
        <div className="text-right ml-auto">
          <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">Next</div>
          <Link href={next.link} className="text-white underline text-xs sm:text-sm hover:text-[#f97316] transition">
            {next.name}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Recent;
