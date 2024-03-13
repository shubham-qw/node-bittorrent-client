'use strict';

import dgram from 'dgram';
import {Buffer} from 'buffer';
import Url from 'url';

module.exports.getPeers = (torrent, callback) => {
    const socket = dgram.createSocket('udp4');
    let url;

    if (typeof(torrent.announce) == 'object') {
        url = new TextDecoder('utf-8').decode(torrent.announce);
    } else {
        url = torrent.announce.toString('utf8');
    }

    // send connect request 
    udpSend(socket,buildConnReq(),url);

    socket.on('message', (response) => {
        if (respType(response) === 'connect') {

        }
    })
}

function udpSend(socket, message, rawUrl, callback = () => {}) {
    const url = Url.parse(rawUrl);
    socket.send(message, 0, message.length, url.port ,url.host, callback); 
}

function respType(resp) {

}

function buildConnReq() {

}

function parseConnResp(resp) {

}

function buildAnnounceReq(connId) {

}

function parseAnnounceResp(resp) {

}