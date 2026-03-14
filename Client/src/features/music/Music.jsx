import React from 'react';

const Music = () => {
    return (
        <div className="bg-green-500 p-4 h-full rounded-l-2xl flex gap-4">
            <div className="bg-red-400 w-full flex flex-col">
                <div className="w-full bg-pink-400 flex-7">Top-Player</div>
                <div className="w-full bg-red-500 flex-3">Bottom-Player</div>
            </div>
            <div className="bg-yellow-400 w-1/3 flex flex-col">
                <div className="bg-violet-400 flex-6">Top-Playlist</div>
                <div className="bg-slate-600 flex-4">Bottom-Playlist</div>
            </div>
        </div>
    );
};

export default Music;