const items = [
    {id: 1, title: 'Land allocation scandal — 2024', leader: 'Leader A'},
    {id: 2, title: 'Procurement fraud — 2023', leader: 'Leader B'},
]

export default function RecentScandals() {
    return (
        <div className="space-y-3">
            {items.map(i => (
                <div key={i.id} className="p-3 border rounded">
                    <div className="font-medium">{i.title}</div>
                    <div className="text-sm text-gray-500">{i.leader}</div>
                </div>
            ))}
        </div>
    )
}
