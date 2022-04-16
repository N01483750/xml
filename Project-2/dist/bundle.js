(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const students = require("../data/data.json");
    
    const getAllStudents = (term, gender, semester, valueTerm ) =>
      new Promise((resolve) => {
        let data = students;
    
        if(term) {
    
            switch(term) {
                case "first_name":
                    data = data.filter(({first_name}) => first_name.toLowerCase().includes(valueTerm));
                    break;
                case "last_name":
                    data = data.filter(({last_name}) => last_name.toLowerCase().includes(valueTerm));
                    break;
                case "contact_number":
                    data = data.filter(({contact_number}) => contact_number.toLowerCase().includes(valueTerm));
                    break;
                case "email":
                    data = data.filter(({email}) => email.toLowerCase().includes(valueTerm));
                    break;
                case "department":
                    data = data.filter(({department}) => department.toLowerCase().includes(valueTerm));
                    break;
                case "university":
                    data = data.filter(({university}) => university.includes(valueTerm));
                    break;
                case "city":
                    data = data.filter(({city}) => city.toLowerCase().includes(valueTerm));
                    break;  
                case "state":
                    data = data.filter(({state}) => state.toLowerCase().includes(valueTerm));
                    break;  
                default:
                    // do nothing
                    break;
            }
        }
    
        // check gender
        if(gender && gender != "other") {
            gender = (gender == "male") ? male : female;
            data = data.filter(({is_male}) => gender === is_male);
        }
    
        // check education
        //if(card_type && card_type.length > 0) {
           // let cards = [];
           // card_type.map((card) => {
             //   cards.push(...data.filter((data) => card == data.card_type));
            //})
            //data = cards;
        //}
        
        // filter cost range
        //if (cost_from && cost_from != "" && cost_to && cost_to != "") {
        //    data = data.filter(({material_rate}) => Number(material_rate.replace("$","")) >= Number(cost_from) && Number(material_rate.replace("$","")) <= Number(cost_to));
        //}
        
        // filter by semester
        if(semester && semester != "none") {
            data = data.filter(({semester_number}) => semester_number.toLowerCase() === semester);
        }
        
        resolve({ data: data });
      });
    
    const getStudentById = (studentId) =>
      new Promise((resolve) => {
        const student = students.find(({id}) => id === Number(studentId));
    
        if (student) {
            resolve({data: Array(student) });
        } else {
            resolve({
                data: { message: `No student found for id ${id}` },
            });
        }
      });
    
    module.exports = {
      getAllStudents,
      getStudentById,
    };
    
    },{"../data/data.json":2}],2:[function(require,module,exports){
    module.exports=[{"id":1,"first_name":"Fulton","last_name":"Romain","contact_number":"969-292-8323","email":"fromain0@ucla.edu","department":"Product Management","university":"Academy of Music, Dance and Fine Arts","city":"Galyugayevskaya","state":null},
    {"id":2,"first_name":"Annie","last_name":"Shimwall","contact_number":"495-967-3492","email":"ashimwall1@163.com","department":"Services","university":"University of North West","city":"Ljungbyholm","state":"Kalmar"},
    {"id":3,"first_name":"Geneva","last_name":"Shills","contact_number":"735-195-9395","email":"gshills2@trellian.com","department":"Engineering","university":"Manhattan Christian College","city":"Sillamäe","state":null},
    {"id":4,"first_name":"Patience","last_name":"Hullot","contact_number":"347-300-5771","email":"phullot3@reverbnation.com","department":"Sales","university":"Pedagogical University of the Polish Association for Adult Education in Warsaw","city":"Marantao","state":null},
    {"id":5,"first_name":"Rurik","last_name":"Brandrick","contact_number":"406-830-7919","email":"rbrandrick4@constantcontact.com","department":"Marketing","university":"Universidade Federal do Maranhão","city":"Zhanjia","state":null},
    {"id":6,"first_name":"Lannie","last_name":"Eversley","contact_number":"721-835-0508","email":"leversley5@elegantthemes.com","department":"Support","university":"Showa Women's University","city":"Jinshan","state":null},
    {"id":7,"first_name":"Georgette","last_name":"Trevon","contact_number":"115-775-0798","email":"gtrevon6@illinois.edu","department":"Marketing","university":"Perlis Islamic Higher Learning Institute","city":"Chư Sê","state":null},
    {"id":8,"first_name":"Carney","last_name":"Mallinson","contact_number":"641-591-0666","email":"cmallinson7@psu.edu","department":"Product Management","university":"Pontificia Università Lateranense","city":"Liborina","state":null},
    {"id":9,"first_name":"Genevieve","last_name":"Mallender","contact_number":"915-379-3408","email":"gmallender8@meetup.com","department":"Support","university":"Hachinohe Institute of Technology","city":"El Paso","state":"Texas"},
    {"id":10,"first_name":"Antonino","last_name":"Aronson","contact_number":"173-398-6571","email":"aaronson9@hatena.ne.jp","department":"Legal","university":"Principia College","city":"Petropavlovka","state":null},
    {"id":11,"first_name":"Swen","last_name":"Blaisdell","contact_number":"617-163-2863","email":"sblaisdella@google.com.hk","department":"Human Resources","university":"International University of Fundamental Studies, St. Petersburg","city":"Ipatinga","state":null},
    {"id":12,"first_name":"Hewet","last_name":"Whiteford","contact_number":"593-518-9550","email":"hwhitefordb@theglobeandmail.com","department":"Engineering","university":"Universidad de Atacama","city":"Shaheying","state":null},
    {"id":13,"first_name":"Petr","last_name":"Humfrey","contact_number":"176-847-0153","email":"phumfreyc@economist.com","department":"Engineering","university":"Kuban State University of Technology","city":"Tianzishan","state":null},
    {"id":14,"first_name":"Kinsley","last_name":"Waggitt","contact_number":"380-268-6832","email":"kwaggittd@vimeo.com","department":"Human Resources","university":"Our Lady of Holy Cross College","city":"Kebloran","state":null},
    {"id":15,"first_name":"Belicia","last_name":"Witson","contact_number":"465-619-3028","email":"bwitsone@vimeo.com","department":"Business Development","university":"University of Wales, Aberystwyth","city":"Patos Fshat","state":null},
    {"id":16,"first_name":"Camilla","last_name":"Egle of Germany","contact_number":"894-746-8735","email":"cegleofgermanyf@uol.com.br","department":"Sales","university":"Universidad Nacional Autonoma de Nicaragua","city":"Andros Town","state":null},
    {"id":17,"first_name":"Sileas","last_name":"Weben","contact_number":"365-747-8614","email":"swebeng@is.gd","department":"Research and Development","university":"Lewis & Clark Community College","city":"München","state":"Bayern"},
    {"id":18,"first_name":"Alford","last_name":"Errington","contact_number":"666-541-7688","email":"aerringtonh@etsy.com","department":"Legal","university":"Ecole Nationale Supérieure d'Agronomie de Montpellier","city":"Saint-Gaudens","state":"Midi-Pyrénées"},
    {"id":19,"first_name":"Henrietta","last_name":"Morsey","contact_number":"893-527-0170","email":"hmorseyi@earthlink.net","department":"Services","university":"Kyoto Bunkyo University","city":"Naran Bulag","state":null},
    {"id":20,"first_name":"Katti","last_name":"Broadhurst","contact_number":"405-167-9303","email":"kbroadhurstj@unc.edu","department":"Marketing","university":"Canadian Sudanese College","city":"Huangbei","state":null},
    {"id":21,"first_name":"Waverly","last_name":"Groombridge","contact_number":"493-194-2970","email":"wgroombridgek@abc.net.au","department":"Accounting","university":"Tokyo Institute of Technology","city":"Lieksa","state":null},
    {"id":22,"first_name":"Anastassia","last_name":"Nisbith","contact_number":"817-885-0935","email":"anisbithl@ask.com","department":"Product Management","university":"Fachhochschule für das öffentliche Bibliothekswesen Bonn","city":"Inkerman","state":null},
    {"id":23,"first_name":"Ivar","last_name":"Bustard","contact_number":"231-707-6703","email":"ibustardm@china.com.cn","department":"Business Development","university":"University of Fiji","city":"Mende","state":"Languedoc-Roussillon"},
    {"id":24,"first_name":"Seward","last_name":"Mogie","contact_number":"486-694-7380","email":"smogien@samsung.com","department":"Accounting","university":"Salem State College","city":"Lapi","state":null},
    {"id":25,"first_name":"Emmit","last_name":"Kringe","contact_number":"589-780-0355","email":"ekringeo@edublogs.org","department":"Sales","university":"Beijing Normal University","city":"Cuauhtemoc","state":"Chihuahua"},
    {"id":26,"first_name":"Rog","last_name":"Fishlock","contact_number":"480-731-7370","email":"rfishlockp@omniture.com","department":"Training","university":"Postgraduate Institute of Agriculture (PGIA)","city":"Kunda","state":null},
    {"id":27,"first_name":"Guthrie","last_name":"McPartling","contact_number":"904-996-1785","email":"gmcpartlingq@tripod.com","department":"Training","university":"Kuzbass State Technical University","city":"Bua Yai","state":null},
    {"id":28,"first_name":"Reinaldos","last_name":"Patters","contact_number":"623-846-1993","email":"rpattersr@hostgator.com","department":"Product Management","university":"Pacific Graduate School of Psychology","city":"Tapilon","state":null},
    {"id":29,"first_name":"Ericha","last_name":"Gussie","contact_number":"768-579-9828","email":"egussies@devhub.com","department":"Human Resources","university":"Baylor University","city":"Negombo","state":null},
    {"id":30,"first_name":"Norine","last_name":"Euels","contact_number":"367-464-7757","email":"neuelst@harvard.edu","department":"Product Management","university":"Umm Al-Qura University","city":"Zhanghua","state":null},
    {"id":31,"first_name":"Thomasa","last_name":"Arter","contact_number":"920-293-4946","email":"tarteru@symantec.com","department":"Sales","university":"Universidad Francisco de Aguirre","city":"Timbrangan","state":null},
    {"id":32,"first_name":"Obadias","last_name":"Lilywhite","contact_number":"873-964-7177","email":"olilywhitev@multiply.com","department":"Business Development","university":"Sri Padmavati Women's University","city":"Ryczywół","state":null},
    {"id":33,"first_name":"Riva","last_name":"Chapiro","contact_number":"505-521-8913","email":"rchapirow@washington.edu","department":"Legal","university":"Washington State University, Spokane","city":"Tacarigua","state":null},
    {"id":34,"first_name":"Ronnica","last_name":"Buxton","contact_number":"518-253-7077","email":"rbuxtonx@ihg.com","department":"Product Management","university":"Université de Ouagadougou","city":"Rokytne","state":null},
    {"id":35,"first_name":"Jarad","last_name":"Causon","contact_number":"211-327-7088","email":"jcausony@tripadvisor.com","department":"Services","university":"Université de Buéa","city":"Bendilmuning","state":null},
    {"id":36,"first_name":"Georgeanna","last_name":"Pyrah","contact_number":"438-518-2557","email":"gpyrahz@paypal.com","department":"Training","university":"Universidad Católica Madre y Maestra","city":"Pemzashen","state":null},
    {"id":37,"first_name":"Marilyn","last_name":"Screeton","contact_number":"951-994-1155","email":"mscreeton10@tinypic.com","department":"Product Management","university":"University of Jammu","city":"Shipka","state":null},
    {"id":38,"first_name":"Angie","last_name":"Sisson","contact_number":"211-333-1099","email":"asisson11@qq.com","department":"Business Development","university":"Rhode Island School of Design","city":"Geshan","state":null},
    {"id":39,"first_name":"Chere","last_name":"Constable","contact_number":"188-791-7412","email":"cconstable12@zimbio.com","department":"Sales","university":"Shanghai Customs College","city":"Pierzchnica","state":null},
    {"id":40,"first_name":"Anton","last_name":"Ingleston","contact_number":"450-182-0388","email":"aingleston13@hubpages.com","department":"Research and Development","university":"Regent University College of Science and Technology  ","city":"Trới","state":null},
    {"id":41,"first_name":"Dierdre","last_name":"McElory","contact_number":"910-460-4266","email":"dmcelory14@usgs.gov","department":"Training","university":"Hai Duong University","city":"Strezhevoy","state":null},
    {"id":42,"first_name":"Reube","last_name":"Maslen","contact_number":"823-124-5309","email":"rmaslen15@globo.com","department":"Business Development","university":"Trevecca Nazarene University","city":"Senovo","state":null},
    {"id":43,"first_name":"Babara","last_name":"Feldon","contact_number":"934-956-2017","email":"bfeldon16@gov.uk","department":"Accounting","university":"Shomal University","city":"Salgar","state":null},
    {"id":44,"first_name":"Petey","last_name":"Sperring","contact_number":"222-213-1139","email":"psperring17@skyrock.com","department":"Legal","university":"Jacobs University Bremen","city":"Kibondo","state":null},
    {"id":45,"first_name":"Serene","last_name":"Emmett","contact_number":"962-784-9820","email":"semmett18@shutterfly.com","department":"Product Management","university":"Volgograd State Academy of Physical Education","city":"Duowa","state":null},
    {"id":46,"first_name":"Judd","last_name":"Brewster","contact_number":"115-664-3278","email":"jbrewster19@live.com","department":"Training","university":"Lebanese International University","city":"Słubice","state":null},
    {"id":47,"first_name":"Rene","last_name":"Canlin","contact_number":"649-875-2120","email":"rcanlin1a@meetup.com","department":"Support","university":"Universidad de la República","city":"La Vega","state":null},
    {"id":48,"first_name":"Ange","last_name":"Wenderoth","contact_number":"786-520-9325","email":"awenderoth1b@earthlink.net","department":"Accounting","university":"Universiti Teknologi Mara","city":"Simod","state":null},
    {"id":49,"first_name":"Darn","last_name":"Cocci","contact_number":"388-662-4643","email":"dcocci1c@furl.net","department":"Product Management","university":"St. Anne University","city":"Nagano-shi","state":null},
    {"id":50,"first_name":"Wheeler","last_name":"Caulier","contact_number":"462-897-3926","email":"wcaulier1d@washington.edu","department":"Human Resources","university":"University of Southern Mindanao","city":"Jāwā","state":null},
    {"id":51,"first_name":"Val","last_name":"Chupin","contact_number":"822-375-6664","email":"vchupin1e@sakura.ne.jp","department":"Engineering","university":"Mar Athanasios College for Advanced Studies","city":"Vitebsk","state":null},
    {"id":52,"first_name":"Fredrick","last_name":"Smalcombe","contact_number":"575-956-2633","email":"fsmalcombe1f@yellowbook.com","department":"Product Management","university":"Hochschule für Technik und Wirtschaft Dresden (FH)","city":"Abóboda","state":"Lisboa"},
    {"id":53,"first_name":"Aidan","last_name":"Lackey","contact_number":"923-119-5085","email":"alackey1g@issuu.com","department":"Business Development","university":"Arkansas State University","city":"Bairros","state":"Porto"},
    {"id":54,"first_name":"Jolee","last_name":"Devine","contact_number":"847-459-9402","email":"jdevine1h@usnews.com","department":"Research and Development","university":"Araullo University","city":"Hongsung","state":null},
    {"id":55,"first_name":"Alphonse","last_name":"Mosey","contact_number":"696-438-5587","email":"amosey1i@usnews.com","department":"Engineering","university":"Baltimore Hebrew University","city":"Maceió","state":null},
    {"id":56,"first_name":"Lilas","last_name":"Livett","contact_number":"631-804-6372","email":"llivett1j@sciencedaily.com","department":"Legal","university":"University of Colombo","city":"Ngori","state":null},
    {"id":57,"first_name":"Cyrillus","last_name":"Bentzen","contact_number":"153-796-8787","email":"cbentzen1k@archive.org","department":"Accounting","university":"Université d'Orléans","city":"Hecheng","state":null},
    {"id":58,"first_name":"Obediah","last_name":"Giffaut","contact_number":"136-914-6262","email":"ogiffaut1l@dyndns.org","department":"Sales","university":"University of Rhode Island","city":"Qiaoyi","state":null},
    {"id":59,"first_name":"Midge","last_name":"Jobern","contact_number":"112-572-4168","email":"mjobern1m@ft.com","department":"Legal","university":"Afyon Kocatepe University","city":"Dayong","state":null},
    {"id":60,"first_name":"Gayelord","last_name":"Plaster","contact_number":"713-444-6670","email":"gplaster1n@hubpages.com","department":"Legal","university":"Islamic Azad University, Ahar","city":"Houston","state":"Texas"},
    {"id":61,"first_name":"Rebe","last_name":"Johannesson","contact_number":"732-453-5361","email":"rjohannesson1o@squidoo.com","department":"Business Development","university":"Juniata College","city":"Auray","state":"Bretagne"},
    {"id":62,"first_name":"Danica","last_name":"Hudless","contact_number":"499-553-8806","email":"dhudless1p@drupal.org","department":"Business Development","university":"Kaduna State University","city":"Mabilang","state":null},
    {"id":63,"first_name":"Nina","last_name":"Hollingsby","contact_number":"197-454-1312","email":"nhollingsby1q@sina.com.cn","department":"Sales","university":"University of Athens","city":"Czerwin","state":null},
    {"id":64,"first_name":"Mandel","last_name":"Nolin","contact_number":"960-188-3437","email":"mnolin1r@exblog.jp","department":"Sales","university":"Planwel University","city":"Zhongshi","state":null},
    {"id":65,"first_name":"Bennie","last_name":"Borless","contact_number":"234-649-6317","email":"bborless1s@eepurl.com","department":"Marketing","university":"Universidade de Tocantins","city":"Lysice","state":null},
    {"id":66,"first_name":"Jaquelin","last_name":"Wayman","contact_number":"624-225-8937","email":"jwayman1t@businessweek.com","department":"Training","university":"Shanxi Normal University","city":"Baghlān","state":null},
    {"id":67,"first_name":"Cassie","last_name":"Yaldren","contact_number":"609-752-4945","email":"cyaldren1u@google.de","department":"Training","university":"Washington College","city":"Zdolbuniv","state":null},
    {"id":68,"first_name":"Shandee","last_name":"Decreuze","contact_number":"796-693-1148","email":"sdecreuze1v@ihg.com","department":"Human Resources","university":"Indiana State University","city":"Luyi","state":null},
    {"id":69,"first_name":"Seline","last_name":"Paice","contact_number":"146-559-7494","email":"spaice1w@cisco.com","department":"Engineering","university":"Al Imam Al-Ouzai University","city":"Hato Mayor del Rey","state":null},
    {"id":70,"first_name":"Johnny","last_name":"Gebbie","contact_number":"947-496-4525","email":"jgebbie1x@tinypic.com","department":"Sales","university":"North Greenville College","city":"Haitou","state":null},
    {"id":71,"first_name":"Jocko","last_name":"McKeachie","contact_number":"242-988-7950","email":"jmckeachie1y@springer.com","department":"Sales","university":"Université d'Angers","city":"Mogapinyana","state":null},
    {"id":72,"first_name":"Malissa","last_name":"Charley","contact_number":"198-865-6343","email":"mcharley1z@g.co","department":"Product Management","university":"The Chicago School of Professional Psychology","city":"Shinpokh","state":null},
    {"id":73,"first_name":"Melita","last_name":"Beaston","contact_number":"270-630-2093","email":"mbeaston20@foxnews.com","department":"Services","university":"Chengdu University of Traditional Chinese Medicine","city":"Yunfu","state":null},
    {"id":74,"first_name":"Ginnie","last_name":"Haslegrave","contact_number":"535-334-8030","email":"ghaslegrave21@noaa.gov","department":"Engineering","university":"Saad College of Nursing and Allied Health Sciences","city":"Vrdy","state":null},
    {"id":75,"first_name":"Tomi","last_name":"Baddam","contact_number":"576-919-9733","email":"tbaddam22@ihg.com","department":"Research and Development","university":"Universidad José Antonio Páez","city":"Huaraz","state":null},
    {"id":76,"first_name":"Scarlet","last_name":"Stanion","contact_number":"820-290-8661","email":"sstanion23@jugem.jp","department":"Legal","university":"Tomakomai Komazawa University","city":"Zhaoyuan","state":null},
    {"id":77,"first_name":"Lillis","last_name":"Caudrelier","contact_number":"951-283-3847","email":"lcaudrelier24@abc.net.au","department":"Marketing","university":"Salem International University","city":"Ibarreta","state":null},
    {"id":78,"first_name":"Garik","last_name":"Mountstephen","contact_number":"486-555-6340","email":"gmountstephen25@blinklist.com","department":"Product Management","university":"Osaka City University","city":"Yangdian","state":null},
    {"id":79,"first_name":"Orelie","last_name":"O'Fallowne","contact_number":"597-483-0622","email":"oofallowne26@sciencedaily.com","department":"Marketing","university":"Shahputra College","city":"Gwaram","state":null},
    {"id":80,"first_name":"Wilden","last_name":"Tern","contact_number":"691-737-7758","email":"wtern27@t.co","department":"Legal","university":"Vermont Technical College","city":"Cigebrok","state":null},
    {"id":81,"first_name":"Beverly","last_name":"Lamb","contact_number":"393-980-5537","email":"blamb28@elegantthemes.com","department":"Services","university":"Technical University of Cluj-Napoca","city":"Nanpu","state":null},
    {"id":82,"first_name":"Randell","last_name":"Wallbrook","contact_number":"863-899-7394","email":"rwallbrook29@nydailynews.com","department":"Sales","university":"American University Extension, Okinawa","city":"Tarui","state":null},
    {"id":83,"first_name":"Hersh","last_name":"Maundrell","contact_number":"853-388-7157","email":"hmaundrell2a@bigcartel.com","department":"Accounting","university":"Universidad Nacional del Littoral","city":"Henglian","state":null},
    {"id":84,"first_name":"Beilul","last_name":"Davidsohn","contact_number":"545-247-3875","email":"bdavidsohn2b@yale.edu","department":"Human Resources","university":"Malaspina University College","city":"Brades","state":null},
    {"id":85,"first_name":"Romeo","last_name":"Saunders","contact_number":"687-526-2946","email":"rsaunders2c@redcross.org","department":"Sales","university":"Heriot-Watt University","city":"Enköping","state":"Uppsala"},
    {"id":86,"first_name":"Waldo","last_name":"Downer","contact_number":"776-996-3590","email":"wdowner2d@nba.com","department":"Training","university":"Shanghai Second Polytechnic University","city":"Hendala","state":null},
    {"id":87,"first_name":"Sol","last_name":"Pinnijar","contact_number":"470-824-6793","email":"spinnijar2e@vk.com","department":"Business Development","university":"Université Catholique de Lyon","city":"Hannover","state":"Niedersachsen"},
    {"id":88,"first_name":"Delly","last_name":"Levesley","contact_number":"804-259-1630","email":"dlevesley2f@desdev.cn","department":"Business Development","university":"RKDF University","city":"Kassiri","state":null},
    {"id":89,"first_name":"Delia","last_name":"Nanetti","contact_number":"750-313-9770","email":"dnanetti2g@smh.com.au","department":"Services","university":"Institute of Social Studies","city":"Telmin Suma","state":null},
    {"id":90,"first_name":"Andie","last_name":"Yesipov","contact_number":"738-727-9962","email":"ayesipov2h@xing.com","department":"Product Management","university":"Shizuoka Prefectural University","city":"Kamenica","state":null},
    {"id":91,"first_name":"Rayna","last_name":"Wollard","contact_number":"109-190-2713","email":"rwollard2i@dagondesign.com","department":"Human Resources","university":"Silla University","city":"Sal’sk","state":null},
    {"id":92,"first_name":"Dani","last_name":"Brammar","contact_number":"913-976-7334","email":"dbrammar2j@merriam-webster.com","department":"Sales","university":"Southern Polytechnic State Univerisity","city":"Thị Trấn Hát Lót","state":null},
    {"id":93,"first_name":"Theresa","last_name":"Topper","contact_number":"504-242-7460","email":"ttopper2k@artisteer.com","department":"Sales","university":"University of Bologna","city":"Yuetang","state":null},
    {"id":94,"first_name":"Dalia","last_name":"Nono","contact_number":"156-332-7699","email":"dnono2l@multiply.com","department":"Legal","university":"Manipal University","city":"Sal’sk","state":null},
    {"id":95,"first_name":"Elias","last_name":"Frail","contact_number":"217-646-5797","email":"efrail2m@jalbum.net","department":"Engineering","university":"Universitas Syiah Kuala","city":"Shengli","state":null},
    {"id":96,"first_name":"Garv","last_name":"Neill","contact_number":"605-530-0862","email":"gneill2n@time.com","department":"Marketing","university":"Cardiff University","city":"Blachownia","state":null},
    {"id":97,"first_name":"Sawyer","last_name":"Jehan","contact_number":"557-225-9890","email":"sjehan2o@go.com","department":"Human Resources","university":"Center for Humanistic Studies","city":"Gião","state":"Porto"},
    {"id":98,"first_name":"Rayna","last_name":"Huard","contact_number":"542-851-6414","email":"rhuard2p@creativecommons.org","department":"Training","university":"Aichi Sangyo University","city":"Granada","state":"Andalucia"},
    {"id":99,"first_name":"Connie","last_name":"Beumant","contact_number":"146-797-5061","email":"cbeumant2q@yolasite.com","department":"Sales","university":"Kent State University - Salem","city":"Koson","state":null},
    {"id":100,"first_name":"Hubey","last_name":"Niave","contact_number":"548-961-2460","email":"hniave2r@qq.com","department":"Legal","university":"Anhui University of Traditional Chinese Medicine","city":"Caopie","state":null},
    {"id":101,"first_name":"Luciana","last_name":"Ledson","contact_number":"391-707-8057","email":"lledson2s@github.com","department":"Marketing","university":"Bells University of Technology","city":"Kazanskaya","state":null},
    {"id":102,"first_name":"Boniface","last_name":"Branwhite","contact_number":"461-162-9220","email":"bbranwhite2t@google.co.jp","department":"Product Management","university":"Mokpo National Maritime University","city":"El Cacao","state":null},
    {"id":103,"first_name":"Llewellyn","last_name":"Stein","contact_number":"713-753-6278","email":"lstein2u@redcross.org","department":"Services","university":"Beijing University of Aeronautics and Astronautics","city":"Kalanguy","state":null},
    {"id":104,"first_name":"Cathryn","last_name":"Cicero","contact_number":"742-646-6189","email":"ccicero2v@china.com.cn","department":"Product Management","university":"Begum Rokeya University, Rangpur","city":"Kota Kinabalu","state":"Sabah"},
    {"id":105,"first_name":"Dietrich","last_name":"Kindleysides","contact_number":"949-835-6644","email":"dkindleysides2w@gnu.org","department":"Product Management","university":"Kawamura Gakuen Woman's University","city":"Morje","state":null},
    {"id":106,"first_name":"Armand","last_name":"Twigge","contact_number":"786-384-3338","email":"atwigge2x@mozilla.com","department":"Marketing","university":"Academy of Arts in Banská Bystrica","city":"Aldana","state":null},
    {"id":107,"first_name":"Lockwood","last_name":"Barizeret","contact_number":"218-411-8515","email":"lbarizeret2y@earthlink.net","department":"Support","university":"University of Hargeisa","city":"Leramatang","state":null},
    {"id":108,"first_name":"Richardo","last_name":"Hardes","contact_number":"523-361-7446","email":"rhardes2z@imdb.com","department":"Training","university":"Future University","city":"Rancakuya","state":null},
    {"id":109,"first_name":"Katya","last_name":"Guyonnet","contact_number":"771-838-6857","email":"kguyonnet30@twitpic.com","department":"Legal","university":"Aston University","city":"Tahe","state":null},
    {"id":110,"first_name":"Blair","last_name":"Frizzell","contact_number":"843-719-9637","email":"bfrizzell31@miitbeian.gov.cn","department":"Sales","university":"Deutsche Hochschule für Verwaltungswissenschaften Speyer","city":"Charleston","state":"South Carolina"},
    {"id":111,"first_name":"Hollie","last_name":"Quinnell","contact_number":"179-412-9822","email":"hquinnell32@tinyurl.com","department":"Marketing","university":"Universitas Haluoleo","city":"Villanueva","state":null},
    {"id":112,"first_name":"Phebe","last_name":"Yukhnevich","contact_number":"766-680-5523","email":"pyukhnevich33@apple.com","department":"Training","university":"Hacettepe University","city":"Qingyun","state":null},
    {"id":113,"first_name":"Omar","last_name":"Tregea","contact_number":"241-980-7138","email":"otregea34@dell.com","department":"Business Development","university":"Tokai Women's College","city":"Itatskiy","state":null},
    {"id":114,"first_name":"Bendite","last_name":"Popplewell","contact_number":"208-237-7968","email":"bpopplewell35@clickbank.net","department":"Training","university":"Xiangtan University","city":"Aranđelovac","state":null},
    {"id":115,"first_name":"Brade","last_name":"Paddie","contact_number":"612-527-2680","email":"bpaddie36@youku.com","department":"Training","university":"Université des Sciences Humaines (Strasbourg II)","city":"Don Carlos","state":null},
    {"id":116,"first_name":"Quinlan","last_name":"Sybbe","contact_number":"377-910-0603","email":"qsybbe37@cocolog-nifty.com","department":"Legal","university":"Université de Metz","city":"Martensville","state":"Saskatchewan"},
    {"id":117,"first_name":"Daisi","last_name":"Simonnet","contact_number":"471-770-9405","email":"dsimonnet38@de.vu","department":"Marketing","university":"Bakht Er-Ruda University","city":"Zapala","state":null},
    {"id":118,"first_name":"Agnes","last_name":"Canet","contact_number":"669-982-1930","email":"acanet39@weebly.com","department":"Services","university":"National Central University","city":"Jam","state":null},
    {"id":119,"first_name":"Matti","last_name":"Kenward","contact_number":"673-544-3023","email":"mkenward3a@independent.co.uk","department":"Marketing","university":"Southwest Missouri State University - West Plains","city":"Xiaxindian","state":null},
    {"id":120,"first_name":"Freddy","last_name":"Kloisner","contact_number":"850-419-0216","email":"fkloisner3b@e-recht24.de","department":"Human Resources","university":"Northeast University at Qinhuangdao Campus","city":"Baitashan","state":null},
    {"id":121,"first_name":"Gerianna","last_name":"Somersett","contact_number":"548-349-3336","email":"gsomersett3c@acquirethisname.com","department":"Business Development","university":"North East University Bangladesh","city":"Sindangsari","state":null},
    {"id":122,"first_name":"Brose","last_name":"Gillson","contact_number":"833-813-7502","email":"bgillson3d@linkedin.com","department":"Engineering","university":"University of Mohaghegh","city":"Touama","state":null},
    {"id":123,"first_name":"Milka","last_name":"Bullock","contact_number":"838-323-9939","email":"mbullock3e@house.gov","department":"Research and Development","university":"Mahatma Gandhi University, Kerala","city":"Xinsheng","state":null},
    {"id":124,"first_name":"Eduard","last_name":"Siney","contact_number":"402-545-9537","email":"esiney3f@cyberchimps.com","department":"Support","university":"National Taipei University of Technology","city":"Frederiksberg","state":"Region Hovedstaden"},
    {"id":125,"first_name":"Nikolai","last_name":"Chasen","contact_number":"470-121-9795","email":"nchasen3g@is.gd","department":"Research and Development","university":"Vellore Institute of Technology","city":"Bardīyah","state":null},
    {"id":126,"first_name":"Allan","last_name":"Matantsev","contact_number":"615-970-6492","email":"amatantsev3h@bluehost.com","department":"Support","university":"Ecole des Hautes Etudes Commerciales","city":"Lipce Reymontowskie","state":null},
    {"id":127,"first_name":"Man","last_name":"Revett","contact_number":"132-781-8982","email":"mrevett3i@people.com.cn","department":"Support","university":"Megatrend University of Applied Sciences","city":"Pangkalanbunut","state":null},
    {"id":128,"first_name":"Effie","last_name":"Drees","contact_number":"464-598-8658","email":"edrees3j@ow.ly","department":"Services","university":"Universidad del Istmo","city":"Zamość","state":null},
    {"id":129,"first_name":"Mattheus","last_name":"Hoyes","contact_number":"615-127-8520","email":"mhoyes3k@whitehouse.gov","department":"Human Resources","university":"College of Education Ikere","city":"Pingling","state":null},
    {"id":130,"first_name":"Alejandra","last_name":"Sconce","contact_number":"349-170-0913","email":"asconce3l@goo.ne.jp","department":"Legal","university":"Doshisha University","city":"Adelaide","state":null},
    {"id":131,"first_name":"Harland","last_name":"Crosswaite","contact_number":"380-322-6627","email":"hcrosswaite3m@msu.edu","department":"Marketing","university":"Sudan University for Science and Technology","city":"Cineumbeuy","state":null},
    {"id":132,"first_name":"Ross","last_name":"Roston","contact_number":"622-463-8929","email":"rroston3n@telegraph.co.uk","department":"Marketing","university":"Sebatian Kolowa University College","city":"Ulimonong","state":null},
    {"id":133,"first_name":"Aubrey","last_name":"Cabrera","contact_number":"248-676-8527","email":"acabrera3o@about.me","department":"Human Resources","university":"Kardan University","city":"Örnsköldsvik","state":"Västernorrland"},
    {"id":134,"first_name":"Alix","last_name":"Wrefford","contact_number":"418-265-4322","email":"awrefford3p@dion.ne.jp","department":"Legal","university":"Global Open University , Nagaland","city":"Nishor","state":null},
    {"id":135,"first_name":"Consalve","last_name":"Bestar","contact_number":"592-573-6694","email":"cbestar3q@freewebs.com","department":"Support","university":"Murmansk State Technical University","city":"Shardara","state":null},
    {"id":136,"first_name":"Idalina","last_name":"Braunfeld","contact_number":"448-117-7081","email":"ibraunfeld3r@ihg.com","department":"Training","university":"Uttar Pradesh Technical University","city":"Saryshaghan","state":null},
    {"id":137,"first_name":"Tilda","last_name":"Stabbins","contact_number":"516-914-8214","email":"tstabbins3s@mlb.com","department":"Services","university":"Winston-Salem State University","city":"Port Washington","state":"New York"},
    {"id":138,"first_name":"Rutger","last_name":"Weathers","contact_number":"648-771-9859","email":"rweathers3t@deliciousdays.com","department":"Research and Development","university":"Washington State University, Vancouver","city":"Paranaguá","state":null},
    {"id":139,"first_name":"Graehme","last_name":"Limeburner","contact_number":"302-203-7041","email":"glimeburner3u@abc.net.au","department":"Services","university":"Bogor Agricultural University","city":"Warungbanten","state":null},
    {"id":140,"first_name":"Leoine","last_name":"Coye","contact_number":"947-822-1187","email":"lcoye3v@wix.com","department":"Services","university":"Universidade do Rio Grande","city":"Beaconsfield","state":"Québec"},
    {"id":141,"first_name":"Kary","last_name":"MacKowle","contact_number":"525-410-9221","email":"kmackowle3w@accuweather.com","department":"Engineering","university":"Baptist Bible College of Pennsylvania","city":"Belyye Berega","state":null},
    {"id":142,"first_name":"Agnella","last_name":"Fellows","contact_number":"124-136-4003","email":"afellows3x@123-reg.co.uk","department":"Marketing","university":"Wirtschaftsuniversität Wien","city":"Muting","state":null},
    {"id":143,"first_name":"Asher","last_name":"Margeram","contact_number":"838-118-4949","email":"amargeram3y@youku.com","department":"Support","university":"University School of Physical Education","city":"Majin","state":null},
    {"id":144,"first_name":"Cornall","last_name":"Kanwell","contact_number":"970-810-6221","email":"ckanwell3z@nature.com","department":"Human Resources","university":"Matsusaka University","city":"Floriana","state":null},
    {"id":145,"first_name":"Vicki","last_name":"Semeradova","contact_number":"685-962-0190","email":"vsemeradova40@printfriendly.com","department":"Research and Development","university":"Tay Nguyen University","city":"Singgugu","state":null},
    {"id":146,"first_name":"Annabell","last_name":"Dumphries","contact_number":"151-479-5327","email":"adumphries41@amazon.co.uk","department":"Human Resources","university":"Yaroslavl State Medical Academy","city":"Rääkkylä","state":null},
    {"id":147,"first_name":"Charmine","last_name":"Tavener","contact_number":"658-143-3707","email":"ctavener42@stanford.edu","department":"Marketing","university":"University of Chieti","city":"Hal’shany","state":null},
    {"id":148,"first_name":"Oralie","last_name":"Seago","contact_number":"795-420-4087","email":"oseago43@ezinearticles.com","department":"Accounting","university":"Vitebsk State University","city":"Nanger","state":null},
    {"id":149,"first_name":"Fernande","last_name":"Rean","contact_number":"757-966-4833","email":"frean44@paginegialle.it","department":"Human Resources","university":"Detroit College of Business","city":"Daping","state":null},
    {"id":150,"first_name":"Shannan","last_name":"Jerok","contact_number":"205-669-1517","email":"sjerok45@youtu.be","department":"Support","university":"Academy of Economic Studies of Moldova","city":"Tuscaloosa","state":"Alabama"},
    {"id":151,"first_name":"Dorthy","last_name":"Roffe","contact_number":"824-939-7040","email":"droffe46@instagram.com","department":"Legal","university":"Hanoi National Economics University","city":"Xincheng","state":null},
    {"id":152,"first_name":"My","last_name":"Shepperd","contact_number":"476-195-9638","email":"mshepperd47@shop-pro.jp","department":"Services","university":"Al-Jabal Al-Gharbi University","city":"Sypniewo","state":null},
    {"id":153,"first_name":"Elnar","last_name":"Kinzett","contact_number":"181-321-6074","email":"ekinzett48@t-online.de","department":"Marketing","university":"Morgan State University","city":"Hoboksar","state":null},
    {"id":154,"first_name":"Francklyn","last_name":"MacKean","contact_number":"214-295-9028","email":"fmackean49@wunderground.com","department":"Training","university":"University of Development Alternative","city":"Donghuang","state":null},
    {"id":155,"first_name":"Betsey","last_name":"Barstow","contact_number":"330-178-7649","email":"bbarstow4a@fema.gov","department":"Human Resources","university":"Taejon University","city":"Gading","state":null},
    {"id":156,"first_name":"Dyna","last_name":"Sherburn","contact_number":"934-263-4846","email":"dsherburn4b@usda.gov","department":"Legal","university":"University of Science and Arts of Oklahoma","city":"Lirung","state":null},
    {"id":157,"first_name":"Alyce","last_name":"Gawthorpe","contact_number":"474-208-3446","email":"agawthorpe4c@soup.io","department":"Product Management","university":"Syrian International Private University for Science & Technology","city":"Daxin","state":null},
    {"id":158,"first_name":"Maiga","last_name":"Stowte","contact_number":"858-293-5927","email":"mstowte4d@wikispaces.com","department":"Product Management","university":"KDU College Sdn Bhd","city":"Valtelheiro","state":"Bragança"},
    {"id":159,"first_name":"Marybelle","last_name":"Grebbin","contact_number":"201-516-4265","email":"mgrebbin4e@geocities.jp","department":"Marketing","university":"King Khaled University","city":"Bejucal","state":null},
    {"id":160,"first_name":"Terencio","last_name":"Littlewood","contact_number":"380-156-2106","email":"tlittlewood4f@bloglovin.com","department":"Training","university":"Universidad de Almería","city":"Liyang","state":null},
    {"id":161,"first_name":"Tallie","last_name":"Keri","contact_number":"128-170-7882","email":"tkeri4g@slate.com","department":"Services","university":"Teikyo Heisei University","city":"Kidatu","state":null},
    {"id":162,"first_name":"Persis","last_name":"Swatridge","contact_number":"848-795-7734","email":"pswatridge4h@ucoz.ru","department":"Engineering","university":"Glendale University College of Law","city":"Lubu","state":null},
    {"id":163,"first_name":"Bambie","last_name":"Gittings","contact_number":"948-689-1886","email":"bgittings4i@about.me","department":"Product Management","university":"Southwest Forestry University","city":"Charlesland","state":null},
    {"id":164,"first_name":"Barret","last_name":"Northall","contact_number":"449-128-8272","email":"bnorthall4j@addtoany.com","department":"Engineering","university":"Sabanci University","city":"Sława","state":null},
    {"id":165,"first_name":"Felicity","last_name":"Wallington","contact_number":"867-554-5365","email":"fwallington4k@sfgate.com","department":"Marketing","university":"University of Oradea","city":"Lanpelan","state":null},
    {"id":166,"first_name":"Marnie","last_name":"Kynston","contact_number":"272-426-2980","email":"mkynston4l@whitehouse.gov","department":"Sales","university":"Universidad Latinoamericana de Ciencia y Tecnología","city":"Cimaung Kidul","state":null},
    {"id":167,"first_name":"Brandy","last_name":"Brauninger","contact_number":"775-660-6272","email":"bbrauninger4m@is.gd","department":"Accounting","university":"Ningxia Medical College","city":"Kakamigahara","state":null},
    {"id":168,"first_name":"Michail","last_name":"Flieger","contact_number":"125-221-4476","email":"mflieger4n@google.ru","department":"Services","university":"Lake Forest College","city":"Piketberg","state":null},
    {"id":169,"first_name":"Renaldo","last_name":"Camies","contact_number":"182-321-5799","email":"rcamies4o@mayoclinic.com","department":"Legal","university":"Bircham International University","city":"Ziroudani","state":null},
    {"id":170,"first_name":"Arvie","last_name":"Gebhardt","contact_number":"834-195-8815","email":"agebhardt4p@disqus.com","department":"Business Development","university":"Christchurch Polytechnic Institute of Technology","city":"Zaliznychne","state":null},
    {"id":171,"first_name":"Evelyn","last_name":"Sigmund","contact_number":"628-425-7116","email":"esigmund4q@aol.com","department":"Services","university":"Ecole Nationale Vétérinaire de Nantes","city":"Kraaifontein","state":null},
    {"id":172,"first_name":"Ashely","last_name":"Tuxill","contact_number":"749-660-2656","email":"atuxill4r@domainmarket.com","department":"Support","university":"Jimei University","city":"La Habana Vieja","state":null},
    {"id":173,"first_name":"Arnaldo","last_name":"McGinn","contact_number":"334-832-9917","email":"amcginn4s@myspace.com","department":"Business Development","university":"Albertus Magnus College","city":"Bīrganj","state":null},
    {"id":174,"first_name":"Roma","last_name":"Catley","contact_number":"453-794-6464","email":"rcatley4t@google.co.uk","department":"Business Development","university":"University of New Hampshire","city":"Brinkmann","state":null},
    {"id":175,"first_name":"Yuri","last_name":"Durrett","contact_number":"725-747-3867","email":"ydurrett4u@zdnet.com","department":"Business Development","university":"Yaroslavl State Pedagogical University","city":"Tokār","state":null},
    {"id":176,"first_name":"Leigha","last_name":"Treadaway","contact_number":"472-896-5919","email":"ltreadaway4v@virginia.edu","department":"Support","university":"Conservatoire National des Arts et Métiers","city":"Chư Prông","state":null},
    {"id":177,"first_name":"Ardys","last_name":"Eaglestone","contact_number":"447-267-3625","email":"aeaglestone4w@senate.gov","department":"Engineering","university":"Hamamatsu University School of Medicine","city":"Nōgata","state":null},
    {"id":178,"first_name":"Margarete","last_name":"Proctor","contact_number":"806-284-5444","email":"mproctor4x@state.tx.us","department":"Business Development","university":"University of Trinidad and Tobago","city":"Nāḩiyat Baḩār","state":null},
    {"id":179,"first_name":"Gunter","last_name":"Ceresa","contact_number":"764-899-5603","email":"gceresa4y@reference.com","department":"Marketing","university":"National Aerospace University Kharkov Aviation Institute","city":"Le Chambon-Feugerolles","state":"Rhône-Alpes"},
    {"id":180,"first_name":"Walt","last_name":"Beechcraft","contact_number":"425-163-4039","email":"wbeechcraft4z@ebay.com","department":"Product Management","university":"Ecole Nationale Supérieure d'Agronomie et des Industries Alimentaires","city":"Jarinu","state":null},
    {"id":181,"first_name":"Robenia","last_name":"Demer","contact_number":"529-658-0883","email":"rdemer50@vkontakte.ru","department":"Product Management","university":"Fachhochschule Erfurt","city":"Grahamstown","state":null},
    {"id":182,"first_name":"Nikolos","last_name":"Itzcovichch","contact_number":"272-288-6979","email":"nitzcovichch51@prweb.com","department":"Services","university":"Gurukula Kangri University","city":"Obando","state":null},
    {"id":183,"first_name":"Franny","last_name":"Meehan","contact_number":"871-168-9772","email":"fmeehan52@google.cn","department":"Product Management","university":"Universidad ISALUD","city":"Budzów","state":null},
    {"id":184,"first_name":"Gibb","last_name":"Saint","contact_number":"244-666-7596","email":"gsaint53@arstechnica.com","department":"Marketing","university":"Private Fachhochschule für Wirtschaft und Technik Vechta/Diepholz","city":"Krasnohrad","state":null},
    {"id":185,"first_name":"Carree","last_name":"Kemetz","contact_number":"776-599-7772","email":"ckemetz54@webmd.com","department":"Support","university":"University of Maryland Baltimore County","city":"Autun","state":"Bourgogne"},
    {"id":186,"first_name":"Orelie","last_name":"Banfill","contact_number":"716-894-0739","email":"obanfill55@telegraph.co.uk","department":"Research and Development","university":"College of St. Scholastica","city":"Paracambi","state":null},
    {"id":187,"first_name":"Alfi","last_name":"Point","contact_number":"132-434-4849","email":"apoint56@eventbrite.com","department":"Human Resources","university":"DEI Bachelor & Master Degrees","city":"Pirava","state":null},
    {"id":188,"first_name":"Irvine","last_name":"De Carolis","contact_number":"884-468-7146","email":"idecarolis57@gnu.org","department":"Accounting","university":"3rd Military Medical University","city":"Anle","state":null},
    {"id":189,"first_name":"Averell","last_name":"Maleby","contact_number":"125-164-2275","email":"amaleby58@a8.net","department":"Business Development","university":"Nanjing University of Chemical Technology","city":"Sampaloc","state":null},
    {"id":190,"first_name":"Rozanne","last_name":"Hubatsch","contact_number":"334-919-0303","email":"rhubatsch59@pen.io","department":"Human Resources","university":"Georgia Southwestern University","city":"Pan-an","state":null},
    {"id":191,"first_name":"Shelli","last_name":"Angrave","contact_number":"313-828-5131","email":"sangrave5a@arstechnica.com","department":"Accounting","university":"Beirut Arab University","city":"Stavyshche","state":null},
    {"id":192,"first_name":"Byran","last_name":"Bartholomieu","contact_number":"207-547-8495","email":"bbartholomieu5b@pcworld.com","department":"Services","university":"Belmont University","city":"Armopa","state":null},
    {"id":193,"first_name":"Maurise","last_name":"Bispo","contact_number":"173-829-3442","email":"mbispo5c@wordpress.com","department":"Marketing","university":"Royal Danish School of Educational Sciences","city":"Gaozhou","state":null},
    {"id":194,"first_name":"Nikolos","last_name":"Milton","contact_number":"432-438-1737","email":"nmilton5d@about.com","department":"Support","university":"Mount St. Mary's College Maryland","city":"Ettelbruck","state":null},
    {"id":195,"first_name":"Gayla","last_name":"Isselee","contact_number":"312-732-8101","email":"gisselee5e@themeforest.net","department":"Human Resources","university":"National Institute of the Arts","city":"Cevicos","state":null},
    {"id":196,"first_name":"Alleyn","last_name":"Roston","contact_number":"702-988-2919","email":"aroston5f@nytimes.com","department":"Research and Development","university":"Milwaukee School of Engineering","city":"Las Vegas","state":"Nevada"},
    {"id":197,"first_name":"Chelsy","last_name":"Pool","contact_number":"948-806-3530","email":"cpool5g@reuters.com","department":"Services","university":"Akademia Podlaska","city":"Turangi","state":null},
    {"id":198,"first_name":"Raynell","last_name":"Habergham","contact_number":"199-790-5844","email":"rhabergham5h@barnesandnoble.com","department":"Support","university":"Lagos City Polytechnic","city":"Kopral","state":null},
    {"id":199,"first_name":"Wilfrid","last_name":"Mabbett","contact_number":"919-437-1980","email":"wmabbett5i@eventbrite.com","department":"Product Management","university":"Universiteit Antwerpen","city":"Sofo-Birnin-Gwari","state":null},
    {"id":200,"first_name":"Germaine","last_name":"McWhannel","contact_number":"142-605-2187","email":"gmcwhannel5j@prlog.org","department":"Business Development","university":"Kyoto Pharmaceutical University","city":"Nouâdhibou","state":null},
    {"id":201,"first_name":"Filmer","last_name":"Fayer","contact_number":"252-607-0294","email":"ffayer5k@cnbc.com","department":"Services","university":"Briar Cliff College","city":"Jiwei","state":null},
    {"id":202,"first_name":"Fania","last_name":"Crewther","contact_number":"493-232-8057","email":"fcrewther5l@ibm.com","department":"Business Development","university":"Kohat University of Science and Technology  (KUST)","city":"Dongshan","state":null},
    {"id":203,"first_name":"Alyse","last_name":"Tullot","contact_number":"915-519-4493","email":"atullot5m@deliciousdays.com","department":"Business Development","university":"Jain University, Centre for Management Studies","city":"Duyang","state":null},
    {"id":204,"first_name":"Ophelia","last_name":"Jennison","contact_number":"499-140-9078","email":"ojennison5n@prnewswire.com","department":"Training","university":"Universidad Nacional del Centro de la Provincia de Buenos Aires","city":"Tuapukan","state":null},
    {"id":205,"first_name":"Krispin","last_name":"Klimus","contact_number":"346-295-4446","email":"kklimus5o@yelp.com","department":"Support","university":"University of East London","city":"Tabuny","state":null},
    {"id":206,"first_name":"Ludovika","last_name":"Milillo","contact_number":"757-303-7562","email":"lmilillo5p@goo.gl","department":"Product Management","university":"Internationale Fachhochschule Aalen","city":"Fílla","state":null},
    {"id":207,"first_name":"Nollie","last_name":"Parker","contact_number":"722-858-8127","email":"nparker5q@mysql.com","department":"Research and Development","university":"Huaihai Institute of Technology","city":"Neochórion","state":null},
    {"id":208,"first_name":"Ara","last_name":"Kach","contact_number":"544-117-9186","email":"akach5r@telegraph.co.uk","department":"Sales","university":"Kentucky Wesleyan College","city":"Annecy","state":"Rhône-Alpes"},
    {"id":209,"first_name":"Broddie","last_name":"Abramowitz","contact_number":"685-267-4157","email":"babramowitz5s@yelp.com","department":"Business Development","university":"Zhejiang Forestry University","city":"Guam Government House","state":null},
    {"id":210,"first_name":"Cathlene","last_name":"Radolf","contact_number":"711-385-0157","email":"cradolf5t@amazonaws.com","department":"Training","university":"Aurora University","city":"Gravataí","state":null},
    {"id":211,"first_name":"Barny","last_name":"Bazely","contact_number":"902-143-9339","email":"bbazely5u@sbwire.com","department":"Product Management","university":"Ross University, School of Medicine","city":"Luan Balu","state":null},
    {"id":212,"first_name":"Tadio","last_name":"Barnson","contact_number":"700-416-9577","email":"tbarnson5v@google.ca","department":"Legal","university":"Centro Universitario Ciudad Vieja","city":"Đức Phong","state":null},
    {"id":213,"first_name":"Alene","last_name":"Keelinge","contact_number":"488-558-2632","email":"akeelinge5w@usnews.com","department":"Product Management","university":"Universidad Nacional de Río Cuarto","city":"Napnapan","state":null},
    {"id":214,"first_name":"Ame","last_name":"Benedicte","contact_number":"600-543-4514","email":"abenedicte5x@squidoo.com","department":"Engineering","university":"British Columbia Institute of Technology","city":"Lubień Kujawski","state":null},
    {"id":215,"first_name":"Melania","last_name":"Boylan","contact_number":"500-162-4901","email":"mboylan5y@adobe.com","department":"Legal","university":"Université d'Abobo-Adjamé","city":"Zaraysk","state":null},
    {"id":216,"first_name":"Kelsey","last_name":"Lucey","contact_number":"925-323-6295","email":"klucey5z@oaic.gov.au","department":"Human Resources","university":"Universidad Nacional del Noroeste de la Provincia de Buenos Aires","city":"Dolod","state":null},
    {"id":217,"first_name":"Gerda","last_name":"Ajam","contact_number":"302-148-2141","email":"gajam60@eventbrite.com","department":"Business Development","university":"Illinois College","city":"Šilheřovice","state":null},
    {"id":218,"first_name":"Nevins","last_name":"Marshall","contact_number":"884-926-3778","email":"nmarshall61@fotki.com","department":"Sales","university":"Drury College","city":"Mengdong","state":null},
    {"id":219,"first_name":"Pinchas","last_name":"Brilleman","contact_number":"815-146-8105","email":"pbrilleman62@ovh.net","department":"Legal","university":"Providence College","city":"Yonezawa","state":null},
    {"id":220,"first_name":"Howey","last_name":"Struis","contact_number":"212-678-6163","email":"hstruis63@goodreads.com","department":"Legal","university":"National University of Samoa","city":"Kromasan","state":null},
    {"id":221,"first_name":"Maynord","last_name":"McAnalley","contact_number":"678-534-6758","email":"mmcanalley64@ameblo.jp","department":"Human Resources","university":"Universitas Sumatera Utara","city":"Miramichi","state":"New Brunswick"},
    {"id":222,"first_name":"Lyndy","last_name":"Bavage","contact_number":"803-563-0468","email":"lbavage65@pagesperso-orange.fr","department":"Business Development","university":"Universidade Católica de Moçambique","city":"Mainz","state":"Rheinland-Pfalz"},
    {"id":223,"first_name":"Roth","last_name":"Bicheno","contact_number":"869-827-3650","email":"rbicheno66@paginegialle.it","department":"Accounting","university":"St. Joseph's College New York, Suffolk Campus","city":"Colón","state":null},
    {"id":224,"first_name":"Jasper","last_name":"Gwinnel","contact_number":"652-342-0841","email":"jgwinnel67@shop-pro.jp","department":"Services","university":"Southern Ural State University","city":"Pa Sang","state":null},
    {"id":225,"first_name":"Thom","last_name":"Jeaves","contact_number":"685-839-8627","email":"tjeaves68@newyorker.com","department":"Training","university":"Ben-Gurion University of the Negev","city":"Shar’ya","state":null},
    {"id":226,"first_name":"Orren","last_name":"Rothon","contact_number":"782-244-5032","email":"orothon69@lulu.com","department":"Sales","university":"Olabisi Onabanjo University ","city":"Tsingoni","state":null},
    {"id":227,"first_name":"Costanza","last_name":"Louden","contact_number":"739-206-8383","email":"clouden6a@washington.edu","department":"Accounting","university":"Universidad Bellas Artes","city":"Pashkovskiy","state":null},
    {"id":228,"first_name":"Burke","last_name":"Shirley","contact_number":"347-955-0240","email":"bshirley6b@businessinsider.com","department":"Services","university":"Finlandia University","city":"Ji’ergele Teguoleng","state":null},
    {"id":229,"first_name":"Patrice","last_name":"Swalwel","contact_number":"399-758-4451","email":"pswalwel6c@tinyurl.com","department":"Product Management","university":"Jomo Kenyatta University of Agriculture and Technology","city":"São Bento do Sul","state":null},
    {"id":230,"first_name":"Willyt","last_name":"Eakins","contact_number":"531-376-8792","email":"weakins6d@list-manage.com","department":"Support","university":"Bridgewater State College","city":"Chai Badan","state":null},
    {"id":231,"first_name":"Vilma","last_name":"Dohrmann","contact_number":"198-703-8143","email":"vdohrmann6e@techcrunch.com","department":"Training","university":"National Aviation Academy","city":"Cambuí","state":null},
    {"id":232,"first_name":"Rosabel","last_name":"Stollenbeck","contact_number":"612-170-2291","email":"rstollenbeck6f@goodreads.com","department":"Accounting","university":"National Hualien Teachers College","city":"Longtang","state":null},
    {"id":233,"first_name":"Marielle","last_name":"Fenty","contact_number":"793-628-6582","email":"mfenty6g@qq.com","department":"Sales","university":"Eastern Conservatory of Music","city":"Iriga City","state":null},
    {"id":234,"first_name":"Renee","last_name":"Earney","contact_number":"730-116-4493","email":"rearney6h@360.cn","department":"Research and Development","university":"Keiwa College","city":"Piippola","state":null},
    {"id":235,"first_name":"Alonzo","last_name":"Aizik","contact_number":"168-684-2799","email":"aaizik6i@last.fm","department":"Research and Development","university":"Scandinavian Art and Business Institute","city":"Novosil’","state":null},
    {"id":236,"first_name":"Ketti","last_name":"Veljes","contact_number":"555-290-1450","email":"kveljes6j@blogs.com","department":"Sales","university":"University of North Carolina at Pembroke","city":"Jiangshi","state":null},
    {"id":237,"first_name":"Broderick","last_name":"Sigars","contact_number":"121-228-4895","email":"bsigars6k@acquirethisname.com","department":"Product Management","university":"Hokusei Gakuen University","city":"Dana","state":null},
    {"id":238,"first_name":"Christian","last_name":"Zammitt","contact_number":"926-946-1093","email":"czammitt6l@dropbox.com","department":"Research and Development","university":"Institute of Teachers Education, Islamic Education","city":"Tilburg","state":"Provincie Noord-Brabant"},
    {"id":239,"first_name":"Kristel","last_name":"MacGahey","contact_number":"615-827-3797","email":"kmacgahey6m@twitpic.com","department":"Legal","university":"Clark University","city":"Huaishu","state":null},
    {"id":240,"first_name":"Latia","last_name":"Haw","contact_number":"153-203-0582","email":"lhaw6n@yellowpages.com","department":"Engineering","university":"Ural State Forestry Technical Academy","city":"Lanigan","state":"Saskatchewan"},
    {"id":241,"first_name":"Clarine","last_name":"Osbiston","contact_number":"419-387-9641","email":"cosbiston6o@geocities.com","department":"Support","university":"Old Dominion University","city":"Dawang","state":null},
    {"id":242,"first_name":"Fayre","last_name":"Amyes","contact_number":"744-497-2901","email":"famyes6p@state.tx.us","department":"Human Resources","university":"Sunmoon University","city":"Adelaide","state":null},
    {"id":243,"first_name":"Haywood","last_name":"Orrick","contact_number":"159-446-1913","email":"horrick6q@parallels.com","department":"Marketing","university":"Cevro Institut College","city":"Lokavec","state":null},
    {"id":244,"first_name":"Krystle","last_name":"Berrey","contact_number":"680-198-1225","email":"kberrey6r@stanford.edu","department":"Business Development","university":"St. Martin's College","city":"Ovruch","state":null},
    {"id":245,"first_name":"Geri","last_name":"Attew","contact_number":"721-378-8635","email":"gattew6s@tripadvisor.com","department":"Human Resources","university":"Taisho University","city":"Mijiang","state":null},
    {"id":246,"first_name":"Stephannie","last_name":"Morsey","contact_number":"461-277-5491","email":"smorsey6t@uiuc.edu","department":"Accounting","university":"Hai Duong University","city":"Nantian","state":null},
    {"id":247,"first_name":"Gannon","last_name":"Forst","contact_number":"650-277-4449","email":"gforst6u@sogou.com","department":"Engineering","university":"Washington College","city":"Ciulu","state":null},
    {"id":248,"first_name":"Kathryn","last_name":"Merrigans","contact_number":"449-773-5758","email":"kmerrigans6v@mediafire.com","department":"Business Development","university":"Australian Maritime College","city":"Huaping","state":null},
    {"id":249,"first_name":"Izabel","last_name":"Dugall","contact_number":"791-683-3800","email":"idugall6w@sitemeter.com","department":"Engineering","university":"Japanese Red Cross College of Nursing","city":"Daegu","state":null},
    {"id":250,"first_name":"Kane","last_name":"Baxter","contact_number":"362-944-7251","email":"kbaxter6x@cnbc.com","department":"Training","university":"Shreemati Nathibai Damodar Thackersey Women's University","city":"Wudian","state":null}]
    },{}],3:[function(require,module,exports){
    const { getAllStudents, getStudentById } = require("./api/controller/student");
    
    const renderTable = (data) => {
      const tableBody = document.getElementById("table-body");
    
      if (!tableBody) {
        throw new Error("No table element found");
      }
      
      const rows = data.reduce(
        (acc, { id, first_name, last_name, contact_number, email, department, university, city, state}) =>
          acc +
          `<tr>
            <td>${id}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${contact_number}</td>
            <td>${email}</td>
            <td>${department}</td>
            <td>${university}</td>
            <td>${city}</td>
            <td>${state}</td>
            </tr>`,
        ``
      );
    
      tableBody.innerHTML = rows;
    };
    
    getAllStudents().then(({ data }) => renderTable(data));  
    
    const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.filters.value;
      const semester = event.target.filters_semester_name;
      const gender = event.target.gender.value;
      const valueTerm = event.target.input.value;
      
      if(term === `id`) {
        getStudentById(valueTerm).then(({ data }) => renderTable(data));
      } else {
        getAllStudents(term, gender, semester.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
      }
    };
    
    const onReset = () => {
      window.location.replace(window.location.pathname);
      getAllStudents().then(({ data }) => renderTable(data));
    };
    
    document.getElementById("myForm").addEventListener("submit", onSubmit);
    document.getElementById("myForm").addEventListener("reset", onReset);
    
    },{"./api/controller/student":1}]},{},[3]);