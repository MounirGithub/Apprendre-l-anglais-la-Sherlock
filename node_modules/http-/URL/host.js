let host = function ( href ) 
{
    var location = document.createElement ( 'a' );
    location.href = href;
    return location.hostname;
};

module.exports = host;