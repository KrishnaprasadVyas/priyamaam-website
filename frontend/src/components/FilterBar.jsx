import { motion } from "framer-motion";

function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
  visibleCount,
  totalCount,
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-black text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <motion.p
        className="text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Showing{" "}
        <span className="font-semibold text-gray-900">{visibleCount}</span> of{" "}
        <span className="font-semibold text-gray-900">{totalCount}</span>{" "}
        certificates
      </motion.p>
    </motion.div>
  );
}

export default FilterBar;
