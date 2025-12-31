export const primaryButtonCode = `
      {/* Standard Primary Button */}
      <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800 transition">
        Primary Button
      </button>

      {/* Small Size Variant */}
      <button className="px-3 py-1.5 text-sm rounded-md bg-black text-white">
        Small
      </button>

      {/* Medium Size Variant */}
      <button className="px-4 py-2 text-base rounded-md bg-black text-white">
        Medium
      </button>

      {/* Large Size Variant */}
      <button className="px-6 py-3 text-lg rounded-md bg-black text-white">
        Large
      </button> 

      {/* Disabled Variant */}
      <button
        disabled
        className="px-4 py-2 rounded-md bg-black/40 text-white cursor-not-allowed"
      >
        Disabled
      </button>

      {/* Icon Button */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Continue
        <BiArrowToRight />
      </button>


      {/* Outline Variant */}
      <button className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
        Primary Outline
      </button>

      {/* Animated Variant */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Animated Button
      </motion.button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md g-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-linear-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Loading Variant */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Loading
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
        Medium
      </button>

      {/* Large Variant */}
      <button className="px-6 py-3 text-lg rounded-md bg-black text-white">
        Large
      </button>

      {/* Disabled Variant */}
      <button
        disabled
        className="px-4 py-2 rounded-md bg-black/40 text-white cursor-not-allowed"
      >
        Disabled
      </button>

      {/* Icon Button */}
      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Continue
        <BiArrowToRight />
      </button>

      {/* Copy Variant */}
      <button className="p-2 rounded-md bg-black text-white hover:bg-neutral-800">
        <BiCopy />
      </button>

      {/* Loading Variant */}   
      <button
        disabled
        className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2"
      >
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        Loading
      </button>

      {/* Full Width Variant */}
      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      {/* Gradient Variant */}
      <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      {/* Outline Variant */}
      <button className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
        Primary Outline
      </button>



      {/* Animated Variant */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Animated Button
      </motion.button>

`;



export const secondaryButtonCode = `
<button className="px-4 py-2 rounded-md bg-black text-white">
  Secondary Button
</button>
`;

