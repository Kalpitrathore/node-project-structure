var i = 0;
function visitCounter()
{
    i = i + 1;
    return i;
}

module.exports = {
    visitCounter: visitCounter
}