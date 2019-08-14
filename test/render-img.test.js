import { renderImage } from '../src/render-image.js';

const test = QUnit.test;

QUnit.module('Render Image');

test(' renders a dynamic image card', assert => {

    // arrange
    const expected = /*html*/`<li class="card narwhal" title="A unicorn and a narwhal nuzzling their horns" style="background-image:url('http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg')">
<div class="title">
<h2>UniWhal</h2>
</div>
<div class="horn-count">
Horns : 1
</div>
</li>`;

    const data = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    // act
    const result = renderImage(data);

    // assert
    assert.htmlEqual(result, expected);
});