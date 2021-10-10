import { React } from 'react';

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
        </div>
        <div class="px-6 pt-1 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
    );
}