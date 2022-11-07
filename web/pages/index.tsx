import { useTheme } from "next-themes";
import T from "./T";

export default function Web() {
  const { theme, setTheme } = useTheme()
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 text-white bg-black rounded dark:bg-white dark:text-black">
          Dark Toggle
        </button>
        <div className="mt-6">
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              NextJS dark Mode With Tailwind CSS
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              install & setup nextjs dark mode using tailwind css 3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
