DROP TABLE IF EXISTS plants CASCADE;
CREATE TABLE plants (
    id              SERIAL PRIMARY KEY,
    common_name     TEXT NOT NULL,
    botanical_name  TEXT,
    img_url         TEXT NOT NULL,
    type            TEXT NOT NULL,
    pet_safe        BOOLEAN DEFAULT false,
    air_purifier    BOOLEAN DEFAULT false,
    watering        INT,
    light           INT,
    indoor          BOOLEAN DEFAULT true,
    temp_range      TEXT,
    max_growth      TEXT,
    difficulty      INT,
    description     TEXT,
    humidity        TEXT,
    fertilizer      TEXT,
    propagation     TEXT
    );

INSERT INTO plants (common_name, botanical_name, img_url, type, pet_safe, air_purifier, watering, light, indoor, temp_range, max_growth, difficulty)
VALUES
('Aluminum Plant','Pilea Cadierei','https://www.houseplantsexpert.com/image-files/aluminum_plant.jpg','Foliage',FALSE,FALSE,2,2,TRUE,'15-23','30-60',3
),
('Areca Palm','Dypsis lutescens','https://img.crocdn.co.uk/images/products2/pl/20/00/02/88/pl2000028821_card3_lg.jpg','Foliage',TRUE,TRUE,1,2,TRUE,'16-24','240',2
),
('Spider Plant','Chlorophytum comosum vittatum','https://www.houseplantsexpert.com/image-files/spiderplant_2.jpg','Foliage',TRUE,TRUE,3,2,TRUE,'15-24','60',1
),
('Aloe Vera','Aloe barbadensis','https://www.houseplantsexpert.com/assets/images/aloe-vera-plant-1.jpg','Succulents',FALSE,FALSE,2,2,FALSE,'21-26','30-60',2
),
('Peace Lily','Spathiphyllum Wallisii','https://www.houseplantsexpert.com/image-files/p_lily.jpg','Flowering',FALSE,TRUE,2,2,TRUE,'13-25','45-60',1
),
('Jade (Money) Plant','Crassula Ovata','https://robertsonsflowers.imgix.net/images/itemVariation/jadeplantinnewportpot-200311121403.jpg','Succulents',FALSE,FALSE,1,3,FALSE,'15-24','90',1
),
('Weeping Fig Plant','Ficus Benjamina','https://www.houseplantsexpert.com/image-files/ficus-benjamina.jpg','Foliage',FALSE,TRUE,3,3,TRUE,'16-24','300',3
),
('Corn Plant','Dracaena fragrans','https://www.houseplantsexpert.com/image-files/dracaena_fragrans.jpg','Foliage',FALSE,TRUE,2,2,TRUE,'15-24','180',1
),
('Moth orchid','Phalaenopsis','https://i0.wp.com/farmfoodfamily.com/wp-content/uploads/2018/09/Orchid-Plants.jpg?resize=853%2C1024&ssl=1','Flowering',TRUE,FALSE,1,2,TRUE,'16-24','90',2
),
('Baby Rubber Plant','Peperomia obtusifolia','https://cdn.shopify.com/s/files/1/0416/1905/products/Peperomia_obtusifolia_Front_720x.png?v=1571438720','Succulents',TRUE,FALSE,2,2,TRUE,'18-24','25-30',2
),
('African Violet','Saintpaulia','https://i1.wp.com/farmfoodfamily.com/wp-content/uploads/2018/09/african-violet-saintpaulia-ionantha-plant.jpg?w=600&ssl=1','Flowering',TRUE,FALSE,2,3,TRUE,'16-24','7-40',2
),
('Flamingo Flower','Anthurium scherzerianum','https://i1.wp.com/farmfoodfamily.com/wp-content/uploads/2018/09/Flamingo-Flower-Anthurium.jpg?w=810&ssl=1','Flowering',FALSE,FALSE,3,3,FALSE,'18-24','30-45',3
),
('Cast Iron Plant','Aspidistra elatior','https://www.houseplantsexpert.com/image-files/cast-iron-plant.jpg','Foliage',TRUE,FALSE,2,1,TRUE,'15-24','90',1
),
('Mother In Law''s Tongue','Sansevieria trifasciata','https://www.thespruce.com/thmb/oIxigOItIWy9xV9mlQDZOIOAvRo=/2048x1545/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-76c211bb8d1b461e8af30a68b6169535.jpg','Flowering',FALSE,TRUE,1,3,TRUE,'15-24','70',1
),
('Dragon Tree','Dracaena marginata','https://d6p0gevo8s9lm.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/r/dracaena-dragon-tree-marginata_1.jpg','Foliage',FALSE,TRUE,2,2,FALSE,'18-24','240',1
),
('ZZ Plant','Zamioculcas zamiifolia','https://www.houseplantsexpert.com/image-files/zz_plant.png','Foliage',FALSE,FALSE,1,2,TRUE,'15-24','30',1
),
('Cylamen','Cyclamen persicum','https://www.houseplantsexpert.com/assets/images/cyclamen_persicum_variety.jpg','Flowering',FALSE,FALSE,2,2,FALSE,'10-18','25',2
),
('Eternal Flame','Calathea Crocata','https://www.houseplantsexpert.com/assets/images/calathea_crocata.jpg','Flowering',TRUE,FALSE,3,2,TRUE,'16-25','45',2
),
('Barberton Daisy','Gebera Jamesonii','https://www.outsidepride.com/images/products/detail/gardenflower/gerberapastelorange1.jpg','Flowering',TRUE,TRUE,3,3,FALSE,'13-24','65',2
),
('Angel Wing Begonia','Begonia coccinea','https://www.houseplantsexpert.com/assets/images/angel_wing_begonia.jpg','Flowering',FALSE,FALSE,3,1,TRUE,'13-25','120',3
),
('Christmas Cheer','Sedum rubrotinctum','https://www.houseplantsexpert.com/assets/images/sedum_rubrotinctum.jpg','Succulents',TRUE,FALSE,2,3,TRUE,'18-24','30',1
),
('Housetree Leek','Aeonium Arboreum','https://www.houseplantsexpert.com/assets/images/aeonium_arboreum_atropurpureum.jpg','Succulents',TRUE,FALSE,3,3,TRUE,'21-30','90',2
),
('Peruvian Apple Cactus','Cereus peruvianus','https://www.houseplantsexpert.com/image-files/peruvian-apple-cactus-close-up.jpg','Succulents',TRUE,FALSE,1,3,TRUE,'16-24','120',1
),
('Sweet Basil','Ocimum basilicum','https://bilder.t-online.de/b/85/78/77/44/id_85787744/610/tid_da/basilikumpflanze-basilikum-fuehlt-sich-an-warmen-sonnigen-plaetzen-besonders-wohl-braucht-aber-viel-wasser-.jpg','Edible',TRUE,FALSE,3,3,FALSE,'10-25','30',2
),
('Rosemary','Rosmarinus Officinalis','https://www.flowerpower.com.au/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/3274446652/rosemary.jpg','Edible',TRUE,FALSE,2,3,FALSE,'5-25','150',2
),
('Chilli Joker','Capsicum Annuum','https://www.flowerpower.com.au/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/284469e5aa/chilli-joker.jpg','Edible',TRUE,FALSE,3,3,FALSE,'10-25','40',3
),
('Garden Mint','Mentha Spicata','https://www.flowerpower.com.au/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/3277399cd2/garden-mint.jpg','Edible',TRUE,FALSE,3,3,FALSE,'5-25','40',1
),
('Tomato Totem','Solanum Lycopersicum','https://m.media-amazon.com/images/I/51QSp9yHP+L.jpg','Edible',TRUE,FALSE,3,3,FALSE,'10-25','100',2
),
('Strawberry French Alpine','Fragaria Vesca','https://www.flowerpower.com.au/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/325319fa78/strawberry-french-alpine.jpg','Edible',TRUE,FALSE,2,3,FALSE,'10-25','40',2
),
('Oregano','Origanum Vulgare','https://www.flowerpower.com.au/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/image/325016ea2f/oregano.jpg','Edible',TRUE,FALSE,1,3,FALSE,'5-25','20',1
);