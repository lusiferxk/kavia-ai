import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  isOpen,
  onToggle,
  isLast,
}) => {
  return (
    <div>
      <div onClick={onToggle} className="cursor-pointer">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <span
            className={`text-sm lg:text-base font-semibold leading-snug transition-colors duration-200
              ${isOpen ? 'text-white' : 'text-[#DEDCDD]'}`}
          >
            {title}
          </span>
          <div className="w-6 h-6 flex items-center justify-center">
            {isOpen ? (
              <div className="w-3 h-0.5 bg-[#DEDCDD]" />
            ) : (
              <div className="relative">
                <div className="w-[18px] h-0.5 bg-[#DEDCDD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-0.5 h-[18px] bg-[#DEDCDD] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mb-4"
            >
              <p className="text-[#DEDCDD] text-sm lg:text-[15px] font-normal leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isLast && <div className="h-px bg-white/[0.06]" />}
    </div>
  );
};