import React, { Fragment } from 'react'
import {
    HeartIcon,
} from '@heroicons/react/outline'
import logo from '../../assets/visal.png'
import {
    PencilIcon,
    PlusIcon as PlusIconSolid,
} from '@heroicons/react/solid'


const Details = () => {
    return (
        <Fragment>
             <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                        <div className="pb-16 space-y-6">
                            <div>
                                <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                                    <img src={logo} alt="" className="object-cover" />
                                </div>
                                <div className="mt-4 flex items-start justify-between">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            <span className="sr-only">Details for </span>
                                            {/* {currentFile.name} */}
                                        </h2>
                                        <p className="text-sm font-medium text-gray-500">{45}</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                        <span className="sr-only">Favorite</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Information</h3>
                                <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    {/* {Object.keys(currentFile.information).map((key) => (
                                        <div key={key} className="py-3 flex justify-between text-sm font-medium">
                                            <dt className="text-gray-500">{key}</dt>
                                            <dd className="text-gray-900">{currentFile.information[key]}</dd>
                                        </div>
                                    ))} */}
                                </dl>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Description</h3>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-sm text-gray-500 italic">Add a description to this image.</p>
                                    <button
                                        type="button"
                                        className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <PencilIcon className="h-5 w-5" aria-hidden="true" />
                                        <span className="sr-only">Add description</span>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Shared with</h3>
                                <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                    {/* {currentFile.sharedWith.map((person) => (
                                        <li key={person.id} className="py-3 flex justify-between items-center">
                                            <div className="flex items-center">
                                                <img src={person.imageUrl} alt="" className="w-8 h-8 rounded-full" />
                                                <p className="ml-4 text-sm font-medium text-gray-900">{person.name}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Remove<span className="sr-only"> {person.name}</span>
                                            </button>
                                        </li>
                                    ))} */}
                                    <li className="py-2 flex justify-between items-center">
                                        <button
                                            type="button"
                                            className="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            <span className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                                <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                                                Share
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </aside>
                
        </Fragment>
    )
}

export default Details
