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

INSERT INTO plants (common_name, botanical_name, img_url, type, pet_safe, air_purifier, watering, light, indoor, temp_range, max_growth, difficulty, description)
VALUES
('Aluminum Plant','Pilea Cadierei','https://www.houseplantsexpert.com/image-files/aluminum_plant.jpg','Foliage',FALSE,FALSE,3,3,TRUE,'15-23','30-60',3,'The Aluminum plant is an easy going house plant that is generally simple to please.. So long as the Pilea cadierei plant gets the water and sunlight it wants it will continue to be a stunning addition to your indoor garden for years to come.'
),
('Areca Palm','Dypsis lutescens','https://www.houseplantsexpert.com/assets/images/areca_palm_1.jpg','Foliage',TRUE,TRUE,1,3,TRUE,'16-24','240',1,'The areca palm, also known as the butterfly and golden cane palm is the most popular grown indoors from the dypsis genus, and easy to grow. Multiple cane like stems grow from the root system and produce attractive arching fronds, with quite narrow leaflets.'
),
('Spider Plant','Chlorophytum comosum vittatum','https://www.houseplantsexpert.com/image-files/spiderplant_2.jpg','Foliage',TRUE,TRUE,5,4,FALSE,'15-24','60',1,'The spider plant is very popular and can be found in many homes or offices. Most people have owned or lived with one (or many) at some point. These are easy-to-care for types that grow quickly, making them a great beginner''s plant.'
),
('Aloe Vera','Aloe barbadensis','https://www.houseplantsexpert.com/assets/images/aloe-vera-plant-1.jpg','Succulents',FALSE,FALSE,1,3,FALSE,'21-26','30-60',2,'The Aloe Vera plant (succulent type) is well known for offering possible health and beauty benefits that I will discuss further on. This succulent is a tough species that is very easy to care for and rarely presents problems for most growers.'
),
('Peace Lily','Spathiphyllum Wallisii','https://www.houseplantsexpert.com/image-files/p_lily.jpg','Flowering',FALSE,TRUE,4,3,TRUE,'44190','45-60',3,'The peace lily plant is very popular and easy enough for most growers to care for and maintain, which is one of the reason''s it has become so favored. The simplistic look of the glossy leaves and the fantastic white lily that sits above the foliage provides a minimalistic room with an added touch of simplicity.'
),
('Jade (Money) Plant','Crassula Ovata','https://www.houseplantsexpert.com/image-files/jade-plant.jpg','Succulents',FALSE,FALSE,1,4,TRUE,'15-24','90',4,'This needs description here.'
),
('Weeping Fig Plant','Ficus Benjamina','https://www.houseplantsexpert.com/image-files/ficus-benjamina.jpg','Foliage',FALSE,TRUE,3,2,FALSE,'16-24','300',1,'The weeping fig is part of the Ficus plant genus (scientific name: F. benjamina) and tree like, in looks. With large arching branches and long pointed leaves, it looks attractive indoors (apart from leaves dropping). The Benjamina is one of the most popular small indoor trees from this genus that grows quite slowly and needs a grower to take particular care of a few needs (lighting, watering, etc.), which is fairly easy, when you know how.'
),
('Corn Plant','Dracaena fragrans','https://www.houseplantsexpert.com/image-files/dracaena_fragrans.jpg','Foliage',FALSE,TRUE,2,3,TRUE,'15-24','180',3,'The dracaena corn plant (botanical name: dracaena fragrans massangeana) is a well known indoor plant which is grown in many homes and offices within the US, UK and Europe. There are a few dracaena fragrans varieties that display different types of leaves such as the massangeana, lindenii and victoria. The one with the common name corn plant or cornstalk is the massangeana.'
),
('Moth orchid','Phalaenopsis','https://www.houseplantsexpert.com/image-files/moth_orchid_white.jpg','Flowering',TRUE,FALSE,1,3,TRUE,'16-24','90',5,'Moth orchid is the common name for the phalaenopsis orchid that''s quickly become one of the most popular species from the orchidaceae family of flowering plants. Glorious colored blooms all year round and the "ease of growing" is what makes these a popular house plant choice.'
),
('Baby Rubber Plant','Peperomia obtusifolia','https://www.houseplantsexpert.com/assets/images/american_baby_rubber_plant.jpg','Succulents',TRUE,FALSE,2,4,FALSE,'18-24','25-30',3,'Peperomia obtusifolia is commonly known as the American rubber plant, baby rubber plant and pepper face plant that''s from a large genus of over a 1000 species and many cultivars of the Peperomia.'
),
('African Violet','Saintpaulia','https://www.houseplantsexpert.com/assets/images/av-blue-1.jpg','Flowering',TRUE,FALSE,2,4,TRUE,'16-24','7-40',2,'The African violet is one of the most popular flowering house plants from the saintpaulia genus. The genus has about 20 species and thousands of varieties.These have become easier for the average home grower to produce perfect blooms, although they need to be provided with some special care and attention.'
),
('Flamingo Flower','Anthurium scherzerianum','https://www.houseplantsexpert.com/image-files/baby_boomer1.jpg','Flowering',FALSE,FALSE,5,3,FALSE,'18-24','30-45',3,'The flamingo flower plant is a species from the Anthuirum genus that displays great looking waxed effect flowers which bloom with an orange curly spadix. The Anthurium scherzerianum from the genus is suitable for a room within a home because of the acceptable height it grows up to, and of course the attractive spathe it displays for decor purposes.'
),
('Cast Iron Plant','Aspidistra elatior','https://www.houseplantsexpert.com/image-files/cast-iron-plant.jpg','Foliage',TRUE,FALSE,2,2,TRUE,'15-24','90',2,'The Cast Iron plant (Aspidistra Elatior) receives its common name for its ability to withstand neglect. A nice and easy to care for foliage house plant. Even the worst plant neglecter can keep the A. elatior alive and well with its tolerant attitude to light, dry air and lack of watering. There are still a few conditions a grower has to provide and take care of, which are very easy. Over-watering and re-potting too often seem to be the main problems that can cause this species problems.'
),
('Mother In Law''s Tongue','Sansevieria trifasciata','https://www.houseplantsexpert.com/image-files/mother-in-laws-tongue-plant.jpg','Flowering',FALSE,TRUE,3,4,TRUE,'15-24','70',1,'The mother in law''s tongue (also known as snake plant) is a flowering species which is primarily grown for its slick sword-like long leaves. This is a slow growing plant that anyone can grow because of it''s low and high sunlight tolerance and ease of watering.The only way growers can cause this plant serious problems is if they over water or allow the plant to reside in very cold temperatures for long periods.'
),
('Dragon Tree','Dracaena marginata','https://www.houseplantsexpert.com/image-files/Dracaena-marginata.jpg','Foliage',FALSE,TRUE,2,3,FALSE,'18-24','240',1,'The Madagascar Dragon Tree is most definitely one of the easiest indoor plants to grow and maintain. Dracaena Marginata trees can grow up to 6ft high indoors, and they''re slow growing.'
),
('ZZ Plant','Zamioculcas zamiifolia','https://www.houseplantsexpert.com/image-files/zz_plant.png','Foliage',FALSE,FALSE,1,3,TRUE,'15-24','30',1,'The ZZ plant is an easy to grow and care for indoor plant that displays small glossy leaves on stems which can grow up to 3 ft long indoors.The zamioculcas zamiifolia (botanical name) grows well in low or bright lighting conditions and with frequent or much less frequent amounts of water.'
),
('Cylamen','Cyclamen persicum ','https://www.houseplantsexpert.com/assets/images/cyclamen_persicum_variety.jpg','Flowering',FALSE,FALSE,2,3,TRUE,'44122','25',4,'Cyclamen persicum is a small and compact flowering pot plant that may only last this flowering season or possibly next season, if proper care is given. Bright colored blooms, attractive leaves and the ease of these plants blooming during winter time "makes them a popular choice".'
),
('Eternal Flame','Calathea Crocata','https://www.houseplantsexpert.com/assets/images/calathea_crocata.jpg','Flowering',TRUE,FALSE,3,3,TRUE,'16-25','45',3,'Calathea Crocata, also commonly known as the Eternal Flame due to its yellow flowers, will make a colorful and exotic addition to your home. This plant is native to Brazil and tropical America. Due to environmental damage it is hard to find in the wild nowadays.'
),
('Barberton Daisy','Gebera Jamesonii ','https://www.houseplantsexpert.com/assets/images/red_gerbera_daisy_flower_1.jpg','Flowering',TRUE,FALSE,5,4,FALSE,'13-24','65',2,'Barberton daisy is the common name for the Gebera Jamesonii, also known as the Transvaal or Gerbera daisy. The large range of striking flower colors has enabled this flowering pot plant to become a popular house plant choice for a number of years.'
),
('Angel Wing Begonia','Begonia coccinea','https://www.houseplantsexpert.com/assets/images/angel_wing_begonia.jpg','Flowering',FALSE,FALSE,2,3,TRUE,'13-25','120',4,'The Angel wing begonia is a flowering species from a large family of plants (2000 or more and many more hybrids), named Begoniaceae. The Begonia coccinea has a fair few varieties that display glossy type leaves on cane stems and display colorful flowers.'
),
('Christmas Cheer','Sedum rubrotinctum','https://www.houseplantsexpert.com/assets/images/sedum_rubrotinctum.jpg','Succulents',TRUE,FALSE,1,4,TRUE,'18-24','30',2,'This species from the Sedum genus is easily confused with the Jelly beans plant. The main difference between these two plants is the Christmas cheer leaves will turn red when given enough sunlight.'
),
('Housetree Leek','Aeonium Arboreum','https://www.houseplantsexpert.com/assets/images/aeonium_arboreum_atropurpureum.jpg','Succulents',TRUE,FALSE,1,4,FALSE,'21-30','90',2,'The Housetree leek plant is a sub-tropical succulent species that''s primarily grown outdoors. However, being native to the sub-tropics enables the Aeonium arboreum to grow well indoors, and the colder months outdoors in temperate regions are not suitable growing conditions.'
),
('Peruvian Apple Cactus ','Cereus peruvianus','https://www.houseplantsexpert.com/image-files/peruvian-apple-cactus-close-up.jpg','Succulents',TRUE,FALSE,1,4,TRUE,'16-24','120',2,'The Peruvian apple cactus (also known as columnar, column, hedge cactus and others) has the scientific name of Cereus peruvianus or C.repandus. This Cereus (Genus) cacti can produce white flowers within summer - that open up at night, once it matures and a prominent ribbed column stem, with brown colored spines, is displayed.'
),
('Basil','Basilikum','https://bilder.t-online.de/b/85/78/77/44/id_85787744/610/tid_da/basilikumpflanze-basilikum-fuehlt-sich-an-warmen-sonnigen-plaetzen-besonders-wohl-braucht-aber-viel-wasser-.jpg','Edible',TRUE,FALSE,4,3,FALSE,'18-24','30',2,'Basil is great'
);

