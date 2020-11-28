let spicedPg = require("spiced-pg");
let db = spicedPg(
    process.env.DATABASE_URL || "postgres:postgres:postgres@localhost:5432/pyl"
);

//////////////
/// SELECT ///
//////////////

exports.getAllPlants = () => {
    return db.query(
        `
        SELECT * 
        FROM plants 
        ORDER BY common_name ASC
        `
    );
};
