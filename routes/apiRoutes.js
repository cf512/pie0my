const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const pieData = require("../prisma/seed.js");

module.exports = function(app) {

    app.get("/feed", async (req, res) => {
        const pies = await prisma.pie.findMany({});
        res.json(pies);
    });

    app.get("/pies/refill", async (req, res) => {
        const pies = await prisma.pie.findMany({});

        switch (pies.length) {
        case 4:
        case 3:
        case 2:
        case 1:
            res.send(false);
            break;
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
        }
    });

    app.post("/post", async (req, res) => {
        const { name, imageUrl } = req.body;
        const pie = await prisma.pie.create({
            data: {
                name,
                imageUrl
            },
        });
        res.json(pie);
    });

    app.put("/update/:id", async (req, res) => {
        const id = parseInt(req.params.id);
        const pie = await prisma.pie.update({
            where: { id: id },
            data: {imageUrl: req.body.imageUrl},
        });
        res.json(pie);
    });

    app.delete("/pie/:id", async (req, res) => {
        const id = parseInt(req.params.id);
        const pie = await prisma.pie.delete({
            where: { id: id }
        });
        res.json(pie);
    });

};