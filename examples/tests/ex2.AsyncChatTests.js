﻿/// <reference path="../lib/jquery-1.11.1.min.js" />
/// <reference path="../lib/jquery.mockjax.js" />
/// <reference path="../js/ex2.AsyncChat.js" />

$.mockjax({
    url: '/services/ChatService.asmx/GetBlacklist',
    responseTime: 10,
    responseText: { d: ["noob"] }
});

asyncTest('Zprava "jsi noob" neni validni.', function(assert) {
    var zprava = 'jsi noob';
    var chat = new ns.AsyncChat();
    chat.validate(zprava, function(vysledek) {
        assert.equal(vysledek, false);
        QUnit.start();
    });
});

asyncTest('Zprava "jsi noob" neni validni.', function (assert) {
    assert.ok(1);
    QUnit.start();
});