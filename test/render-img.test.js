import { renderImage } from '../src/render-image.js';

const test = QUnit.test;

QUnit.module('Render Image');

test(' renders a dynamic image card', assert => {

// arrange
    const expected = `<div class="card">
<div class="title">
<h2>UniWhal</h2>
</div>
<div class="horn-count">
Horns : 1
</div>
</div>`;

// act
    const result = renderImage();

// assert
    assert.htmlEqual(result, expected);
});