import { cn } from '@/lib/utils';

type DestinationFilterId = 'featured' | 'north' | 'central' | 'south';

interface DestinationFilter {
  id: DestinationFilterId;
  label: string;
}

interface DestinationFilterBarProps {
  filters: DestinationFilter[];
  activeFilter: DestinationFilterId;
  onSelect: (id: DestinationFilterId) => void;
}

export default function DestinationFilterBar({
  filters,
  activeFilter,
  onSelect,
}: DestinationFilterBarProps) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onSelect(filter.id)}
            className={cn(
              'inline-flex min-w-37.5 cursor-pointer items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_22px_rgba(15,23,42,0.18)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:will-change-transform backface-hidden md:min-w-45 md:px-10 md:py-4 md:text-[16px]',
              isActive
                ? 'bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100'
                : 'bg-teal-700 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500',
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
