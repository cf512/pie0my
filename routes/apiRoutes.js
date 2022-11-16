const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const pieData = require("../prisma/seed.js");

module.exports = function(app) {

    app.get("/pies/all", async (req, res) => {
        const pies = await prisma.pie.findMany({}).catch(err => err);
        res.json(pies);
    });

    app.get("/pies/refill", async (req, res) => {
        const pies = await prisma.pie.findMany({}).catch(err => err);

        switch (pies.length) {
        case 0:
            console.log("Start seeding ...");
            for (const p of pieData) {
                const pie = await prisma.pie.create({
                    data: p,
                });
                console.log(`Created pie with id: ${pie.id}`);
            }
            console.log("Seeding finished.");
            res.send(true);
            break;
        default:
            res.send(false);
            break;
        }
    });

    app.delete("/pie/:id", async (req, res) => {
        const id = parseInt(req.params.id);
        const pie = await prisma.pie.delete({
            where: { id: id }
        }).catch(err => err);
        res.json(pie);
    });

};