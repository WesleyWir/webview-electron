const fs = require('fs');
const contentFilePath = './file.txt';

const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");

module.exports = {
    width: "600",
    height: "400",
    url: fileBuffer
}