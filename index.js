'use strict';
import fs from 'fs';
import Bencode from 'bencode';
import dgram from 'dgram';
import {Buffer} from 'buffer';

const socket = dgram.createSocket('udp4');

const myMsg = Buffer.from("hello ?",'utf8');

const torrent = Bencode.decode(fs.readFileSync('puppy.torrent'));

console.log(torrent.announce.toString('utf8'));