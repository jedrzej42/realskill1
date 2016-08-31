describe('app', function ()
{
    'use strict';

    var answer = window.app;

    describe('exchangeMoney', function ()
    {
        it('should return false if money is not a number', function ()
        {
            expect(answer.exchangeMoney('four')).toBeFalsy();
        });

        it('should return false if money is less than 0', function ()
        {
            expect(answer.exchangeMoney(-2)).toBeFalsy();
        });

        it('should return empty array if money is 0', function ()
        {
            expect(answer.exchangeMoney(0)).toEqual([]);
        });

        it('should return only 5 value coins', function ()
        {
           expect(answer.exchangeMoney(15)).toEqual([5,5,5]);
        });

        it('should return only 2 value coins', function ()
        {
            expect(answer.exchangeMoney(4)).toEqual([2,2]);
        });
        it('should return good exchange for money', function ()
        {
            expect(answer.exchangeMoney(13)).toEqual([5,5,2,1]);
            expect(answer.exchangeMoney(9)).toEqual([5,2,2]);
        });
    });
});
