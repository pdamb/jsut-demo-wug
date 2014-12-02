/// <reference path="../js/ex1.Chat.js" />

module('zakladni testy', {
    setup: function() {
        this.c = new ns.Chat();
    },
    teardown: function() {
        delete this.c;
    }
});

test('Zprava "jsi skvely" je v poradku.', function (assert) {
    var zprava = 'jsi skvely';
    var vysledek = this.c.validate(zprava);
    assert.equal(vysledek, true, 'vse bylo ok');
});

test('zprava "jsi noob" neni v poradku.', function(assert) {
    var zprava = 'jsi noob';
    var vysledek = this.c.validate(zprava);
    assert.ok(!vysledek);
});

module('abc');
test('zprava "jsi noob" neni v poradku.', function (assert) {
    assert.ok(1);
});