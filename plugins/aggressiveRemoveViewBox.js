'use strict';

exports.type = 'perItem';

exports.active = false;

exports.description = 'aggresively removes viewBox attribute (disabled by default)';

var regViewBox = /^0\s0\s([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)\s([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)$/,
    viewBoxElems = ['svg', 'pattern'];

/**
 * Aggresively remove viewbox attribute regardless is dimensions match
 *
 * @example
 * <svg width="100" height="50" viewBox="0 0 120 50">
 *             ⬇
 * <svg width="100" height="50">
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich, Theo Lampert
 */
exports.fn = function(item) {

    if (
        item.isElem(viewBoxElems) &&
        item.hasAttr('viewBox')
    ) {
        var match = item.attr('viewBox').value.match(regViewBox);
        item.removeAttr('viewBox');
    }

};
