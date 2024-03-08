'use strict';
import fs from 'fs';
import Bencode from 'bencode';
import dgram from 'dgram';
import { Buffer } from 'buffer';
import Url from 'url';

const urlParse = Url.parse

const socket = dgram.createSocket('udp4');

const myMsg = Buffer.from('hello?','utf8');

const torrent = Bencode.decode(fs.readFileSync('puppy.torrent'));

const url = urlParse(new TextDecoder("utf-8").decode(torrent.announce));

console.log(url)

 socket.send(myMsg,0,myMsg.length,url.port,url.host, () => {});

 socket.on('message', msg => {
    console.log('messgae is', msg);
 })

