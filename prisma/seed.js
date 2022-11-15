const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const pieData = [
    {
        name: "Blueberry",
        imageUrl: "public/img/blueberry-pie.png"
    },
    {
        name: "Apple",
        imageUrl: "public/img/apple-pie.png"
    },
    {
        name: "Banana Cream",
        imageUrl: "public/img/banana-cream-pie.png"
    },
    {
        name: "Cherry",
        imageUrl: "public/img/cherry-pie.png"
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
