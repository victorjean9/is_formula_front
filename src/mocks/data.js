const data = {
    name: "A",
    size: [100, 100],
    children: [
        {
        name: "BA",
        size: [100, 50],
        children: [
            { name: "BAA", size: [100, 50] },
            {
            name: "BAB",
            size: [100, 50],
            children: [
                { name: "BABA", size: [100, 50] },
                { name: "BABB", size: [100, 50] },
            ],
            },
            { name: "BAC", size: [200, 50] },
        ],
        },
        {
        name: "BB",
        size: [100, 75],
        children: [
            { name: "BBA", size: [50, 50] },
            { name: "BBB", size: [50, 50] },
        ],
        },
    ],
};

export default data;