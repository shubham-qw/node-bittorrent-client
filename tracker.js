'use strict';

import dgram from 'dgram';
import {Buffer} from 'buffer';
import {parse} from 'url';

module.exports.getPeers = (torrent, callback) => {
    const socket = dgram.createSocket('udp4');
    let url;

    if (typeof(torrent.announce) == 'object') {
        url = new TextDecoder('utf-8').decode(torrent.announce);
    } else {
        url = torrent.announce.toString('utf8');
    }

    udpSend(socket,buildConnReq(),url);
}

function udpSend(socket, message, rawUrl, callback = () => {}) {
    const url = parse(rawUrl);
}

function buildConnReq() {

}