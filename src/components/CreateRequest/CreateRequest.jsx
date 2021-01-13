import React, { useEffect, useState } from "react";
import { RequestService } from "../../service/RequestService";

export const CreateRequest = () => {
    const [stateRequests, setStateRequests] = useState({
        newRequest: {},
        isLoading: true,
        error: null,
    });

  const { newRequest, isLoading, errors } = stateRequests;

  const saveRequest = () => {
      console.log(stateRequests);
    let service = new RequestService();
    service
      .saveRequest(newRequest)
      .then((res) => console.log(res))
      .catch((error) =>
        setStateRequests({ ...stateRequests, error, isLoading: false })
      );
  };

  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {showModal ? (
        <>
          CreateRequest
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div>
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Create Request
                      </h3>
                      <div className="mt-2">
                        <form action="#" method="POST">
                          <div className="overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                  ></label>
                                  <label className="inline-flex items-center mt-3">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-3 w-3 text-gray-600"
                                    />
                                    <span className="ml-2 text-gray-700">
                                      Asociate Project
                                    </span>
                                  </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Project
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="form-input mt-1 block w-full px-3 border pl-1 border-black-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-1 sm:text-sm"
                                  >
                                    <option>No project</option>
                                    <option>Project 1</option>
                                    <option>Project 2</option>
                                    <option>Project 3</option>
                                    <option>Project 4</option>
                                    <option>Project 5</option>
                                  </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={newRequest.name}
                                    id="name"
                                    autoComplete="given-name"
                                    className="form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm rounded-md"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="url"
                                    className="block text-sm font-medium text-border-black-700"
                                  >
                                    URL
                                  </label>
                                  <input
                                    type="text"
                                    name="url"
                                    value={newRequest.url}
                                    id="url"
                                    autoComplete="family-name"
                                    className="form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm rounded-md"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Method
                                  </label>
                                  <select
                                    id="country"
                                    name="country"
                                    value={newRequest.method}
                                    autoComplete="country"
                                    className="form-input mt-1 block w-full px-3 border pl-1 border-black-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-1 sm:text-sm"
                                  >
                                    <option>GET</option>
                                    <option>POST</option>
                                    <option>PUT</option>
                                    <option>PATCH</option>
                                    <option>DELETE</option>
                                  </select>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="headers"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Headers
                                  </label>
                                  <input
                                    type="text"
                                    name="headers"
                                    value={newRequest.headers}
                                    id="headers"
                                    autoComplete="email"
                                    className="form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm rounded-md"
                                  />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="body"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Body
                                  </label>
                                  <textarea
                                    type="text"
                                    name="body"
                                    value={newRequest.body}
                                    id="body"
                                    autoComplete="email"
                                    className="border rounded-md form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm"
                                  ></textarea>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label
                                    htmlFor="authorization"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Authorization
                                  </label>
                                  <input
                                    type="text"
                                    name="authorization"
                                    value={newRequest.authorization}
                                    id="authorization"
                                    autoComplete="email"
                                    className="form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm rounded-md"
                                  />
                                </div>

                                <div className="col-span-6">
                                  <label
                                    htmlFor="street_address"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    name="street_address"
                                    value={newRequest.description}
                                    id="street_address"
                                    autoComplete="street-address"
                                    className="form-input pl-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-0.5 block w-full shadow-sm rounded-md"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => saveRequest()}
                              >
                                Create
                              </button>

                              <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border pl-1 border-black-900 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setShowModal(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
