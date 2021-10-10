import { ContributeCard, Nav, Feed } from './'

const products = [
    {
        name: '🪞 Deity Shringaar',
        image: {
            id: 1,
            imageSrc: './Diwali/Deities 3.jpeg',
            imageAlt: "Ornaments and clothing for the Deities",
            primary: true,
        },
        description: `<p>Ornaments and clothing for the Deities</p>`
    },
    {
        name: '🪔 Diyas',
        image: {
            id: 1,
            imageSrc: './Diwali/Diyas.jpeg',
            imageAlt: "Diyas (ghee lamps) to honour the deities",
            primary: true,
        },
        description: `<p>Diyas (ghee lamps) to honour the deities</p>`
    },
    {
        name: '🥧 Prasadam',
        image: {
            id: 1,
            imageSrc: './Diwali/Prasadam.jpeg',
            imageAlt: "Delicious vegetarian food prepared and offered to the Lord",
            primary: true,
        },
        description: `<p>Delicious vegetarian food prepared and offered to the Lord</p>`
    },
    {
        name: '🏟 Venue',
        image: {
            id: 1,
            imageSrc: './Diwali/Venue.jpeg',
            imageAlt: "Reservation of a spacious venue for the event",
            primary: true,
        },
        description: `<p>Reservation of a spacious venue for the event</p>`
    },
    {
        name: '💐 Flowers',
        image: {
            id: 1,
            imageSrc: './Diwali/Flowers.jpeg',
            imageAlt: "Flowers for the deities and hall decorations",
            primary: true,
        },
        description: `<p>Flowers for the deities and hall decorations</p>`
    },
    {
        name: '⛰ Govardhan Puja',
        image: {
            id: 1,
            imageSrc: './Diwali/Govardhan 2.jpeg',
            imageAlt: "Govardhan hill preparation for puja offering",
            primary: true,
        },
        description: `<p>Govardhan hill preparation for puja offering</p>`
    },
    {
        name: '🙏🏻 Arati',
        image: {
            id: 1,
            imageSrc: './Diwali/Arati.jpeg',
            imageAlt: "Arati offering to the Deities",
            primary: true,
        },
        description: `<p>Arati offering to the Deities</p>`
    },
    {
        name: '🧩 Misc',
        image: {
            id: 1,
            imageSrc: './Diwali/Misc.jpeg',
            imageAlt: "Miscellaneous items that pop up last moment",
            primary: true,
        },
        description: `<p>Miscellaneous items that pop up last moment</p>`
    }
];

const contributors = [
    {
      id: 0,
      name: 'Lindsay Walton',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
      contributions: [
        {
            item: "Prasadam",
            amt: "€108"
        }
      ]
    },
    {
        id: 1,
        name: 'Anonymous',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        contributions: [

        ]
    },
    {
        id: 2,
        name: 'Anonymous',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        contributions: [

        ]
    }
];

export default function Contribute() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-10 text-indigo-700">Contribute to Preparations</h1>
          </div>
        </header>
        <main className="flex">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-48 flex flex-col items-center xl:items-start space-y-12">
                {products.map((p) => (<ContributeCard product={p}/>))}
            </div>

            <div className="hidden sticky top-8 xl:block mt-4 mr-16 -ml-12 w-72 h-96">
                <p className="mb-4">
                    Recent Activity
                </p>

                <div className="h-96 overflow-y-scroll border border-gray-300 px-4 rounded-2xl">
                    <Feed contributors={contributors}/>
                </div>
            </div>

        </main>
      </div>
    </div>
  )
}
