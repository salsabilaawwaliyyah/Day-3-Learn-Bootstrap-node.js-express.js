//siaopim berkas rumah
const { createServer } = require('node:http');
var fs = require('fs');  //tools untuk baca tulis file (sejenis pandas) file sistem

// Tentukan dimana alamat rumahnya
const hostname = '127.0.0.1';
const port = 3000;

// perintahkan buat rumah
const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// Rumah bisa didatangi
server.listen(port, hostname, () => {
    //simulasi program membaca dan menulis file 
    fs.readFile("temp.txt", "utf-8", (err, data) => {
        console.log(data);
    });
    fs.writeFile("temp.txt", "utf-897guy", (err, data) => {
        console.log(data);
    });
    console.log(`Server running at http://${hostname}:${port}/`);
});

//yang keluar yang console kedua dku karena asyncronus (proses yang sedang berjalan di skip dulu tanpa menunggu yang awal selesai/proses yang belum selesai pindah/proses lebih cepat)


