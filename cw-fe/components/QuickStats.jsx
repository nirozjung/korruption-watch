export default function QuickStats() {
    // Placeholder numbers — replace with API calls
    const stats = [
        {label: 'Total Cases ', value: '132'},
        {label: 'Total Amount (NPR) ', value: '₨ 12,450,000,000'},
        {label: 'Leaders Listed ', value: '48'}
    ]
    return (
        <div className="grid grid-cols-3 gap-4 -mt-8">
            {stats.map(s => (
                <div key={s.label} className="bg-white p-4 rounded-lg shadow flex flex-col">
                    <span className="text-xs text-gray-500">{s.label}</span>
                    <span className="text-xl font-bold">{s.value}</span>
                </div>
            ))}
        </div>
    )
}
