import React, { useEffect, useState } from "react";
import { RequestService } from "../../service/RequestService";
import { CreateRequest } from "../CreateRequest/CreateRequest";
import { Metric } from "../Metric/Metric";

export const SingleRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [stateRequests, setStateRequests] = useState({
    requests: [],
    isLoading: true,
    error: null,
  });
  const { requests, isLoading, errors } = stateRequests;

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    let service = new RequestService();
    service
      .getRequests()
      .then((res) =>
        res.map((request) => ({
          name: `${request.name}`,
          url: `${request.url}`,
          method: `${request.method}`,
        }))
      )
      .then((requests) => {
        console.log(requests);
        setStateRequests({
          requests,
          isLoading: false,
        });
      })
      .catch((error) =>
        setStateRequests({ ...stateRequests, error, isLoading: false })
      );
  };

  return (
    <>
      <div className="mt-8 mr-8">
        <div className="flex justify-end">
          <button
            className="px-2 py-1 border border-transparent rounded-md text-black bg-gray-200 hover:bg-gray-400"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => setShowModal(true)}
          >
            Agregar
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <CreateRequest />
        </>
      ) : null}
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto">
          <div className="min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      URL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Method
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Metric
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {!isLoading ? (
                    requests.map((request, index) => {
                      const { url, name, method } = request;
                      return (
                        <>
                          <tr
                            className="bg-gray-50 border-b-2 border-gray-100"
                            key={url}
                          >
                            <td className="px-6 py-4 text-left">
                              <p>{name}</p>
                            </td>
                            <td className="text-left">
                              <p>{url}</p>
                            </td>
                            <td className="text-left">
                              <p>{method}</p>
                            </td>
                            <td>
                              {url.indexOf("1") != -1 ? (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Inactive
                                </span>
                              ) : (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Active
                                </span>
                              )}
                            </td>
                            <td className="text-left">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  width="25"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </a>
                            </td>
                            <td className="text-left">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  width="25"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </a>
                            </td>
                          </tr>
                          {index == 0 ? (
                            <>
                              <Metric></Metric>
                            </>
                          ) : null}
                        </>
                      );
                    })
                  ) : (
                    <tr>
                      <td>
                        <p>Loading...</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
