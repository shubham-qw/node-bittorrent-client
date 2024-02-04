'use strict';
import fs from 'fs';
import Bencode from 'bencode';

const torrent = Bencode.decode(fs.readFileSync('puppy.torrent'));

console.log(torrent.announce.toString('utf8'));