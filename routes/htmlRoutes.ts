import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

module.exports = function(app: any) {
    app.get("/", async function(req: any, res: any) {
        const dbPies = await prisma.pie.findMany({});
        res.render("index", {
            msg: "Welcome!",
            pieList: dbPies
        });
    });

    app.get("/wheel", function(req: any, res: any) {
        res.render("wheel", {
            msg: "Wheel!"
        });
    })

    // Render 404 page for any unmatched routes
    app.get("*", function(req: any, res: any) {
        res.render("404");
    });
};
