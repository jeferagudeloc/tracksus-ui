import React from "react";

export const Metric = () => {
  return (
    <tr>
      <td colspan="6">
        <div className="container">
          <div class="py-4 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mt-2">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-4">
                  <div class="flex">
                    <div class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <dt class="text-lg leading-6 font-medium text-gray-900">
                        time(0.8239s)
                      </dt>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                      <dt class="text-lg leading-6 font-medium text-gray-900">
                        status(200 OK)
                      </dt>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30"
                      >
                        <path
                          fill="#fff"
                          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                      <dt class="text-lg leading-6 font-medium text-gray-900">
                        size(7.71 KB)
                      </dt>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width="30"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                        />
                      </svg>
                      <dt class="text-lg leading-6 font-medium text-gray-900">
                        headers( x x )
                      </dt>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
