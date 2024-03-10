'use strict'
import Bencode from 'bencode';
import {Buffer} from 'buffer';
import dgram from 'dgram';
import url from 'url';
import fs from 'fs';

const torrentUnitArray = Bencode.decode(fs.readFileSync('puppy.torrent'));

const torrentDecoded = new TextDecoder('utf-8').decode(torrentUnitArray.announce);

const udpMessage = Buffer.from('hello?','utf8');

const torrentUrlObj = url.parse(torrentDecoded);
const {host,port} = torrentUrlObj;

const udpServerSocket = dgram.createSocket('udp4');

udpServerSocket.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    udpServerSocket.close();
});

udpServerSocket.send(udpMessage,0,udpMessage.length,port,host, (err) => {
    if (err) {
        console.error(`sending message error:\n`,err);
        process.exit();
    }
})

udpServerSocket.on('message' , (msg) => {
   console.log(`Incoming message:\n`, msg);
})

