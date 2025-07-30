"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import platform icons
import githubIcon from '../../../public/assets/icons/github.svg';
import jiraIcon from '../../../public/assets/icons/jira.svg';
import awsIcon from '../../../public/assets/icons/aws.svg';
import salesforceIcon from '../../../public/assets/icons/salesforce.svg';
import asanaIcon from '../../../public/assets/icons/asana.svg';
import hubspotIcon from '../../../public/assets/icons/hubspot.svg';
import stackIcon from '../../../public/assets/icons/stack.svg';

const IntegrationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
      <motion.div 
        ref={containerRef}
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",
        }}
        className="w-full max-w-[1256px] h-[544px] relative bg-[#fdf7f2] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border border-[#c9c6c6] backdrop-blur-[45px] overflow-hidden"
      >
        {/* Background container */}
        <div className="w-full h-full absolute left-0 top-0 overflow-hidden">
          {/* Center Logo Container */}
          <div className="w-[72px] h-[72px] absolute left-1/2 -translate-x-1/2 top-[434px] bg-white rounded-[18px] flex items-center justify-center shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33),0px_40px_11px_0px_rgba(12,9,8,0.01)] z-10">
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src="/assets/icons/KaviaAILogo.svg"
                  alt="Kavia Logo"
                  width={60}
                  height={60}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Top and Bottom Curved Borders */}
          <div className="w-[412px] h-[71px] absolute left-1/2 top-0 -translate-x-1/2 rounded-b-[125px] border border-[#ece6e1]" />
          <div className="w-[412px] h-[71px] absolute left-1/2 -translate-x-1/2 top-[473px] rounded-t-[125px] border border-[#ece6e1] -z-10" />

          {/* Diagonal Lines */}
          <div className="hidden md:block w-[325px] h-[303px] absolute left-[-18px] top-[-9px]">
            <div className="w-[428.51px] h-[0px] absolute left-[321px] top-[303px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
            <div className="w-[234.76px] h-[0px] absolute left-[166px] top-[252px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
            <div className="w-[236.17px] h-[0px] absolute left-[325px] top-[167px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
          </div>

          <div className="hidden md:block w-[325px] h-[303px] absolute right-[0px] top-[-9px]">
            <div className="w-[428.51px] h-[0px] absolute right-[297px] top-[303px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
            <div className="w-[234.76px] h-[0px] absolute right-[138px] top-[252px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
            <div className="w-[236.17px] h-[0px] absolute right-[294px] top-[167px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute top-[57px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 px-4 md:px-0">
          {/* Integration Label */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="h-6 px-2.5 bg-[#fbfaf9] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(216,210,202,0.50),0px_0px_0px_1px_rgba(235,231,224,1.00),inset_0px_-1.5px_0px_0px_rgba(231,226,218,0.50)] flex items-center gap-[5px]"
          >
            <Image
              src={stackIcon}
              alt="Stack"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-[#231f20] text-xs font-medium font-['Inter'] capitalize leading-normal tracking-wide">
              integrations
            </span>
          </motion.div>

          {/* Title and Description */}
          <div className="max-w-[457px] flex flex-col items-center gap-4">
            <h2 className="text-2xl md:text-[32px] leading-tight md:leading-[44px] font-semibold text-center tracking-wide text-[#231f20]">
              Connect KAVIA with Your Favourite Tools & Apps
            </h2>
            <p className="text-base md:text-[17px] leading-relaxed text-center text-[#4a4340] font-medium">
            Streamline your workflow with powerful integrations
</p>
          </div>
        </div>

        {/* Integration Icons */}
        <div className="absolute w-full md:w-[1027px] h-48 left-0 md:left-[117px] top-[134px] px-4 md:px-0">
          {/* Row 1 */}
          <div className="absolute w-full left-0 md:left-[155px] top-[40px] md:top-0">
            <div className="relative flex justify-between md:justify-start md:gap-[611px]">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center translate-x-8 md:translate-x-0"
              >
                <Image src={jiraIcon} alt="Jira" width={30} height={30} />
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center -translate-x-8 md:translate-x-0"
              >
                <Image src={awsIcon} alt="AWS" width={30} height={30} />
              </motion.div>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="absolute w-full left-0 md:left-0 top-[120px] md:top-[82px]">
            <div className="relative flex justify-between md:justify-start md:gap-[915px]">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center translate-x-4 md:translate-x-0"
              >
                <Image src={githubIcon} alt="GitHub" width={30} height={30} />
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center -translate-x-4 md:translate-x-0"
              >
                <Image src={salesforceIcon} alt="Salesforce" width={30} height={30} />
              </motion.div>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="absolute w-full left-0 md:left-[155px] top-[200px] md:top-[136px]">
            <div className="relative flex justify-between md:justify-start md:gap-[611px]">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center translate-x-8 md:translate-x-0"
              >
                <Image src={asanaIcon} alt="Asana" width={30} height={30} />
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center -translate-x-8 md:translate-x-0"
              >
                <Image src={hubspotIcon} alt="HubSpot" width={30} height={30} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntegrationSection;

// "use client";

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';

// // Import platform icons
// import githubIcon from '../../../public/assets/icons/github.svg';
// import jiraIcon from '../../../public/assets/icons/jira.svg';
// import awsIcon from '../../../public/assets/icons/aws.svg';
// import salesforceIcon from '../../../public/assets/icons/salesforce.svg';
// import asanaIcon from '../../../public/assets/icons/asana.svg';
// import hubspotIcon from '../../../public/assets/icons/hubspot.svg';
// import stackIcon from '../../../public/assets/icons/stack.svg';

// const IntegrationSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"]
//   });

//   const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

//   return (
//     <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
//       <motion.div 
//         ref={containerRef}
//         style={{
//           opacity: opacity,
//           rotateX: rotateX,
//           transformPerspective: "800px",
//         }}
//         className="w-full max-w-[1256px] h-[544px] relative bg-[#fdf7f2] rounded-2xl shadow-[0px_3px_3px_0px_rgba(0,0,0,0.12)] border border-[#c9c6c6] backdrop-blur-[45px] overflow-hidden"
//       >
//         {/* Background container */}
//         <div className="w-full h-full absolute left-0 top-0 overflow-hidden">
//           {/* Center Logo Container */}
//           <div className="w-[72px] h-[72px] absolute left-1/2 -translate-x-1/2 top-[434px] bg-white rounded-[18px] flex items-center justify-center shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33),0px_40px_11px_0px_rgba(12,9,8,0.01)] z-10">
//             <div>
//               <Image
//                 src="/assets/icons/KaviaAILogo.svg"
//                 alt="Kavia Logo"
//                 width={60}
//                 height={60}
//               />
//             </div>
//           </div>

//           {/* Top and Bottom Curved Borders */}
//           <div className="w-[412px] h-[71px] absolute left-1/2 top-0 -translate-x-1/2 rounded-b-[125px] border border-[#ece6e1]" />
//           <div className="w-[412px] h-[71px] absolute left-1/2 -translate-x-1/2 top-[473px] rounded-t-[125px] border border-[#ece6e1] -z-10" />

//           {/* Diagonal Lines */}
//           <div className="hidden md:block w-[325px] h-[303px] absolute left-[-18px] top-[-9px]">
//             <div className="w-[428.51px] h-[0px] absolute left-[321px] top-[303px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
//             <div className="w-[234.76px] h-[0px] absolute left-[166px] top-[252px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
//             <div className="w-[236.17px] h-[0px] absolute left-[325px] top-[167px] origin-top-left rotate-[-135deg] border border-[#ece6e1]" />
//           </div>

//           <div className="hidden md:block w-[325px] h-[303px] absolute right-[0px] top-[-9px]">
//             <div className="w-[428.51px] h-[0px] absolute right-[297px] top-[303px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
//             <div className="w-[234.76px] h-[0px] absolute right-[138px] top-[252px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
//             <div className="w-[236.17px] h-[0px] absolute right-[294px] top-[167px] origin-top-right rotate-[135deg] border border-[#ece6e1]" />
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="absolute top-[57px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 px-4 md:px-0">
//           {/* Integration Label */}
//           <div className="h-6 px-2.5 bg-[#fbfaf9] rounded-[999px] shadow-[0px_1px_2px_0px_rgba(216,210,202,0.50),0px_0px_0px_1px_rgba(235,231,224,1.00),inset_0px_-1.5px_0px_0px_rgba(231,226,218,0.50)] flex items-center gap-[5px]">
//             <Image
//               src={stackIcon}
//               alt="Stack"
//               width={16}
//               height={16}
//               className="w-4 h-4"
//             />
//             <span className="text-[#231f20] text-xs font-medium font-['Inter'] capitalize leading-normal tracking-wide">
//               integrations
//             </span>
//           </div>

//           {/* Title and Description */}
//           <div className="max-w-[457px] flex flex-col items-center gap-4">
//             <h2 className="text-2xl md:text-[32px] leading-tight md:leading-[44px] font-semibold text-center tracking-wide text-[#231f20]">
//               Connect KAVIA with Your Favourite Tools & Apps
//             </h2>
//             <p className="text-base md:text-[17px] leading-relaxed text-center text-[#4a4340] font-medium">
//               Detailed analysis and documentation of existing enterprise knowledge base and code.
//             </p>
//           </div>
//         </div>

//         {/* Integration Icons */}
//         <div className="absolute w-full md:w-[1027px] h-48 left-0 md:left-[117px] top-[134px] px-4 md:px-0">
//           {/* Row 1 */}
//           <div className="absolute left-1/2 md:left-[155px] top-0 -translate-x-1/2 md:translate-x-0 flex gap-8 md:gap-[611px]">
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={jiraIcon} alt="Jira" width={30} height={30} />
//             </div>
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={awsIcon} alt="AWS" width={30} height={30} />
//             </div>
//           </div>
          
//           {/* Row 2 */}
//           <div className="absolute left-1/2 md:left-0 top-[82px] -translate-x-1/2 md:translate-x-0 flex gap-8 md:gap-[915px]">
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={githubIcon} alt="GitHub" width={30} height={30} />
//             </div>
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={salesforceIcon} alt="Salesforce" width={30} height={30} />
//             </div>
//           </div>
          
//           {/* Row 3 */}
//           <div className="absolute left-1/2 md:left-[155px] top-[136px] -translate-x-1/2 md:translate-x-0 flex gap-8 md:gap-[611px]">
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={asanaIcon} alt="Asana" width={30} height={30} />
//             </div>
//             <div className="w-14 h-14 bg-white rounded-[18px] shadow-[0px_2px_4px_0px_rgba(12,9,8,0.33)] flex items-center justify-center">
//               <Image src={hubspotIcon} alt="HubSpot" width={30} height={30} />
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default IntegrationSection;