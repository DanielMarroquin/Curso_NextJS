

interface SeedData {
    entries: SeedEntry[];
}


interface SeedEntry {
    description: string,
    createdAt: number,
    status: string
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Lorem ipsum, dolor sit amet adipisicing elit. Impedit, libero.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'In-Progress: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            description: 'Terminadas: ipsum sit amet consectetur adipisicing elit. Quasi, accusantium.',
            status: 'finished',
            createdAt: Date.now()
        }
    ]
}