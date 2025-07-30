// // src/components/ui/NewsCard/NewsCard.tsx
// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { cn } from '@/lib/utils';

// interface NewsCardProps {
//   date: string;
//   title: string;
//   image?: string;
// }

// const NewsCard: React.FC<NewsCardProps> = ({ date, title, image }) => {
//   return (
//     <div className="w-[402px] h-[598px] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border border-[rgba(201,198,198,0.3)] backdrop-blur-[45px] flex-col justify-start items-start inline-flex transition-all duration-300 group">
//       <div className="w-[402px] h-[352px] relative bg-[#fdf7f2] rounded-t-2xl overflow-hidden">
//         {image && (
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         )}
//       </div>
//       <div className={cn(
//         "h-[246px] px-6 py-8 flex-col justify-start items-start gap-8 flex rounded-b-2xl",
//         "bg-[#231F20]/95",
//         "group-hover:bg-gradient-to-b group-hover:from-[#231F20] group-hover:to-black",
//         "transition-all duration-300"
//       )}>
//         <div className="self-stretch h-[126px] flex-col justify-start items-start gap-3 flex">
//           <div className="self-stretch text-[#dedcdd] text-base font-normal font-['Inter'] leading-normal">
//             {date}
//           </div>
//           <div className="self-stretch text-white text-xl font-semibold font-['Inter'] leading-[30px]">
//             {title}
//           </div>
//         </div>
//         <div className="w-6 h-6 relative">
//           <ArrowUpRight className={cn(
//             "w-6 h-6 text-white transition-colors duration-300",
//             "group-hover:text-[#f26a1b]"
//           )} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

// src/components/ui/NewsCard/NewsCard.tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NewsCardProps {
  id: string; // Added id prop
  date: string;
  title: string;
  image?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, date, title, image }) => {
  return (
    <Link href={`/news/${id}`}>
      <div className="w-full max-w-[402px] min-h-[598px] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border border-[rgba(201,198,198,0.3)] backdrop-blur-[45px] flex flex-col justify-start items-stretch transition-all duration-300 group">
        {/* Image Container */}
        <div className="relative w-full pt-[87.5%] bg-[#fdf7f2] rounded-t-2xl overflow-hidden">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content Container */}
        <div className={cn(
          "flex-1 px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between gap-6 sm:gap-8 rounded-b-2xl",
          "bg-gradient-to-b from-[#231F20]",
          "group-hover:bg-[#231F20]/95",
          "transition-all duration-300"
        )}>
          <div className="flex flex-col gap-3">
            <div className="text-[#dedcdd] text-sm sm:text-base font-normal font-['Inter'] leading-normal">
              {date}
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold font-['Inter'] leading-[1.5] sm:leading-[30px] line-clamp-3 min-h-[90px]">
              {title}
            </h3>
          </div>
          
          <div className="flex items-center">
            <ArrowUpRight className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 text-white transition-colors duration-300",
              "group-hover:text-[#f26a1b]"
            )} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;