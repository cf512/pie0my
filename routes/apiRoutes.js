const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = function(app) {

    app.get("/feed", async (req, res) => {
        const pies = await prisma.pie.findMany({});
        res.json(pies);
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
        const { id } = req.params;
        const pie = await prisma.pie.delete({
            where: {
                id,
            },
        });
        res.json(pie);
    });

};