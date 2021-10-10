const FeedItem = (contributor) => {
      return (
        <li key={contributor.id} className="py-4">
            <div className="flex space-x-3">
                {/* <img className="h-6 w-6 rounded-full" src={contributor.imageUrl} alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{contributor.name}</h3>
                        <p className="text-sm text-gray-500">{contributor.time}</p>
                    </div>
                    <h1 className="text-sm font-normal text-gray-400">joined the celebration! 🎉</h1>
                    <p className="text-sm text-gray-500">
                        {contributor.contributions.map((c) => (
                            <p>contributed <span style={{"color": "blue"}}>{c.amt}</span> to {c.item} preparation!</p>
                        ))}
                    </p>
                </div>
            </div>
        </li>
      );
  };
  
  export default function Feed({ contributors }) {
    return (
      <div>
        <ul role="list" className="divide-y divide-gray-200">
          {contributors.map((contributor) => (
              FeedItem(contributor)
          ))}
        </ul>
      </div>
    )
  }
  