let URI = function ( href ) 
{
    var location = document.createElement ( 'a' );
    location.href = href;
    return location.pathname;
};

module.exports = URI;