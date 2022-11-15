const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = function(app) {
    app.get("/", async function(req, res) {
        const dbPies = await prisma.pie.findMany({});
        res.render("index", {
            msg: "Welcome!",
            pieList: dbPies
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
