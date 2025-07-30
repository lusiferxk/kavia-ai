import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
    active?: boolean;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="md:text-base text-xs font-inter">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href && !item.active ? (
              <Link
                href={item.href}
                className="!text-white !underline underline-offset-4 decoration-gray-400 hover:decoration-gray-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
