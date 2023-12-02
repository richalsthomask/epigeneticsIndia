export default function Pricing({}) {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700  md:p-20">
      <h2 class="text-2xl font-medium">Jedi Order Membership</h2>

      <div class="flex flex-wrap items-center justify-center mt-8">
        <div class="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
          <div class="flex flex-col items-center p-10 bg-yellow-100">
            <span class="font-semibold">Jedi Knight</span>
            <div class="flex items-center">
              <span class="text-3xl">$</span>
              <span class="text-6xl font-bold">50</span>
              <span class="text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div class="p-10 px-16">
            <ul>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 italic">Padawan +</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Solo missions</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-green-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Utility belt</span>
              </li>
            </ul>
          </div>
          <div class="flex px-10 pb-10 justfy-center">
            <button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-yellow-300 rounded-lg">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
