import React from 'react'
import logo from '../../../logo.png'

import {
    Link
  } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="container border-r-2 border-gray-600 h-full">
            <div className="pt-4">
                <img className="m-1.5 h-12 w-50 " src={logo} alt="Workflow"/>
            </div>
            <div className="mt-4">
                <ul>
                    <li className="hover:bg-gray-300">
                        <div className="h-8 w-full">
                            <Link to="/projects" className="text-gray-900"> Projects </Link>
                        </div>
                    </li>
                    <li className="hover:bg-gray-300">
                        <div className="h-8 w-full">
                            <Link to="/graph" className="text-gray-900"> Graph </Link>
                        </div>
                    </li>
                    <li className="hover:bg-gray-300">
                        <div className="h-8 w-full">
                            <Link to="/chart" className="text-gray-900"> Chart </Link>
                        </div>
                    </li>
                    <li className="hover:bg-gray-300">
                        <div className="h-8 w-full">
                            <Link to="/report" className="text-gray-900"> Report </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
