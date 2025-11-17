import {useEffect, useRef} from 'react';
import * as d3 from 'd3';

export default function D3Chart() {
    const ref = useRef(null);

    useEffect(() => {
        const data = [
            {party: 'NC', amount: 500},
            {party: 'UML', amount: 300},
            {party: 'Maoist', amount: 180},
            {party: 'RSP', amount: 80},
        ];

        const width = 1000;
        const height = 300;
        const svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        svg.attr('viewBox', `0 0 ${width} ${height}`);

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.party))
            .range([40, width - 30])
            .padding(0.3);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.amount)])
            .range([height - 30, 20]);

        svg
            .append('g')
            .attr('transform', `translate(0, ${height - 30})`)
            .call(d3.axisBottom(x));

        svg.append('g').attr('transform', `translate(40, 0)`).call(d3.axisLeft(y));

        const color = d3
            .scaleOrdinal()
            .domain(data.map((d) => d.party))
            .range(['#2563eb', '#16a34a', '#dc2626', '#f59e0b']); // blue, green, red, yellow

        svg
            .selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d) => x(d.party))
            .attr('y', (d) => y(d.amount))
            .attr('width', x.bandwidth())
            .attr('height', (d) => height - 30 - y(d.amount))
            .attr('rx', 4)
            .attr('fill', (d) => color(d.party));

        // Add labels on top of bars
        svg
            .selectAll('.label')
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d) => x(d.party) + x.bandwidth() / 2)
            .attr('y', (d) => y(d.amount) - 5)
            .attr('text-anchor', 'middle')
            .attr('fill', '#374151')
            .attr('font-size', '12px')
            .text((d) => d.amount);
    }, []);

    return <svg ref={ref} className="w-full h-64"></svg>;
}
