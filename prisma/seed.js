const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const pieData = [
    {
        name: "Blueberry",
        imageUrl: "/images/blueberry-pie.png"
    },
    {
        name: "Apple",
        imageUrl: "/images/apple-pie.png"
    },
    {
        name: "Banana Cream",
        imageUrl: "/images/banana-cream-pie.png"
    },
    {
        name: "Cherry",
        imageUrl: "/images/cherry-pie.png"
    },
];

async function main() {
    console.log("Start seeding ...");
    for (const p of pieData) {
        const pie = await prisma.pie.create({
            data: p,
        });
        console.log(`Created pie with id: ${pie.id}`);
    }
    console.log("Seeding finished.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
