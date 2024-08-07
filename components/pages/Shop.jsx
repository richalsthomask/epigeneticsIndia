import Link from "next/link";

export default function Shop() {
  return (
    <div class="mt-12 bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="mx-auto mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Shop
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src="/Screenshot 2024-07-22 162345.png"
                alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <Link href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic T-shirt
                  </Link>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
