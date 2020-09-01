const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const exToJson = require('convert-excel-to-json');
const xml2js = require('xml2js');
const util = require('util');
const d3 = require('d3');
const multer = require('multer');

// Require User Modules
const {
    instrumentSeparator,
} = require('../FactoryTalkObjects/Instruments/InstrumentsFunctions');
const {
    lineSeparator,
    createXmlLines,
} = require('../FactoryTalkObjects/Lines/LineFunctions');
const {
    valveSeparator,
} = require('../FactoryTalkObjects/Valves/ValvesFunctions');
const { tankSeparator } = require('../FactoryTalkObjects/Tanks/TanksFunctions');
const { HeaderSE10 } = require('../FactoryTalkObjects/Header/SE10');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates/views');
const partialsDirectory = path.join(__dirname, '../templates/partials');

// Setup static directory to use
app.use(express.static(publicDirectory));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirectory);
hbs.registerPartials(partialsDirectory);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kris Leal',
    });
});
app.get('/screenGenerator', (req, res) => {
    res.render('screenGenerator', {
        title: 'Weather App',
        name: 'Kris Leal',
    });
});

app.post('/screenGenerator', (req, res) => {
    let upload = multer({ storage: storage }).array('fileUpload', 10);

    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }

        let result = 'You have uploaded these images: <hr />';
        const files = req.files;
        let index, len;
        console.log(files.length);
        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<h3>${files[index].path}</h3>`;
        }
        result += `<hr/><a href="./">Upload more images</a>`;
        res.send(result);
    });

    // for (let f of e.dataTransfer.files) {
    //     let filename = f.name.slice(0, -4);
    //     console.log('The file(s) you dragged: ', f);
    //     ipcRenderer.send('ondragstart', f.path);

    //     let xlsJSON = exToJson({
    //         sourceFile: f.path,
    //         columnToKey: {
    //             '*': '{{columnHeader}}',
    //         },
    //     });

    //     const {
    //         lines,
    //         processLines,
    //         cipLines,
    //         serviceLines,
    //         airLines,
    //     } = lineSeparator(xlsJSON.Summary);
    //     const valves = valveSeparator(xlsJSON.Summary);
    //     const tanks = tankSeparator(xlsJSON.Summary);
    //     const instruments = instrumentSeparator(xlsJSON.Summary);
    //     const text = xlsJSON.Summary.filter(d => d.Name === 'Text');

    //     // Scale the drawing to fit on a 1920 X 853 FTView screen
    //     const padding = 10;

    //     let xValues = [
    //         ...lines.map(obj => obj['End X']),
    //         ...lines.map(obj => obj['Start X']),
    //     ];
    //     let yValues = [
    //         ...lines.map(obj => obj['End Y']),
    //         ...lines.map(obj => obj['Start Y']),
    //     ];

    //     xValues = xValues.filter(
    //         num =>
    //             num !== undefined &&
    //             num !== 'Center X' &&
    //             num !== 'End X' &&
    //             num !== 'Start X'
    //     ); // Filter out the heading values and undefined values

    //     yValues = yValues.filter(
    //         num =>
    //             num !== undefined &&
    //             num !== 'Center Y' &&
    //             num !== 'End Y' &&
    //             num !== 'Start Y'
    //     ); // Filter out the heading values and undefined values

    //     xValues = xValues.map(num => parseInt(num, 10));
    //     yValues = yValues.map(num => parseInt(num));

    //     xMin = d3.min(xValues);
    //     xMax = d3.max(xValues);
    //     yMin = d3.min(yValues);
    //     yMax = d3.max(yValues);

    //     const xRatio = 1800 / (xMax - xMin);
    //     const yRatio = 800 / (yMax - yMin);

    //     const scaleFactor = Math.floor(Math.min(xRatio, yRatio));

    //     // Flip vertically

    //     let xmlLines = [...createXmlLines(lines)];
    //     // let xmlMixproofValves = [...createMixproofValves()];
    //     // let xmlTanks = [...createTanks()];

    //     HeaderSE10.gfx.line = xmlLines;
    //     // let grouparray = [...xmlTanks, ...xmlMixproofValves];

    //     console.timeEnd(`${filename}a`);
    // }
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
