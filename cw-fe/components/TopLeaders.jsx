const sample = [
    {id: 1, name: 'Sher Bahadur Deuba', party: 'NC', score: 95, photo: '/deuba.jpg'},
    {id: 2, name: 'KP Oli', party: 'UML', score: 89, photo: '/kpoli.jpg'},
    {id: 3, name: 'Pushpa Kamal Dahal', party: 'Maoist', score: 82, photo: '/prachanda.jpg'},
    {id: 4, name: 'Rabi Lamichhane', party: 'RSP', score: 77, photo: '/rabi.jpg'},
]

export default function TopLeaders() {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {sample.map((l) => (
                <div key={l.id}
                     className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-36 sm:w-44 md:w-48">
                    <div className="relative">
                        {/* leader image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-rose-500">
                            <img
                                src={l.photo}
                                alt={l.name}
                                width={100}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* leader details */}
                    <div className="text-center mt-3">
                        <h4 className="font-semibold text-gray-800">{l.name}</h4>
                        <span className="text-sm text-gray-500">{l.party}</span>
                        <div className="mt-1 text-sm text-rose-600 font-medium">
                            Score: {l.score}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


