import { React } from 'react';
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
  } from "react-share";

const shareUrl = 'https://diwali2021.nl';
const title = 'Diwali Celebration in Amsterdam!';

export default function Invite() {
    return (
        <div class="max-w-lg rounded-2xl overflow-hidden shadow-lg">
            <img class="w-full" src="./Diwali/sitaram.jpeg" alt="Mountain" />

            <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-4">
                    Deepawali 2021
                    <div class="mt-1 text-gray-400 font-normal">
                        ISKCON Amsterdam Mahotsav
                    </div>
                </div>
                
                <p class="text-gray-700 text-xl">
                    <p>Date: 29 October, 2021</p>
                    <p>Venue: </p>
                </p>

                <p class="text-gray-700 text-xl text-right mb-4">
                    <p>Naman Dwivedi</p>
                    <p className="text-gray-500 font-light">Contribution Amount: <span className="text-indigo-500 font-normal">€108</span></p>
                </p>

                <p class="text-gray-400 text-sm text-center mb-2">
                    <p>Hare Krishna Hare Krishna Krishna Krishna Hare Hare</p>
                    <p>Hare Rama Hare Rama Rama Rama Hare Hare</p>
                </p>
            </div>

            <div class="px-6 pt-1 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#diwali2021</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rama</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#iskcon</span>
            </div>

            <div className="w-full flex justify-end mb-4 px-4 items-center">
                {/* <button className="bg-indigo-600 text-white font-semibold rounded-full px-16 py-2 flex items-center space-x-2 hover:bg-indigo-700">
                    <p>Share</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                </button> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>

                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button ml-2"
                >
                    <FacebookIcon size={48} round />
                </FacebookShareButton>

                <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button ml-2"
                >
                    <WhatsappIcon size={48} round />
                </WhatsappShareButton>

                <LinkedinShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button ml-2"
                >
                    <LinkedinIcon size={48} round />
                </LinkedinShareButton>

                <FacebookMessengerShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button ml-2"
                >
                    <FacebookMessengerIcon size={48} round />
                </FacebookMessengerShareButton>
            </div>
        </div>
    );
}