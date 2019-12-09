window.onload = function () {
    console.log('running');

    var interpolateMatches = ['{', '}'];

    var interpolate = function (properties) {
        var controller = document.querySelectorAll('[bindMe]');
        console.log(controller);
    }
    
    interpolate(
        {
            name: 'Theo',
            age: '23'
        },
        {
            name: 'Raveen',
            age: '24'
        }
    );
}