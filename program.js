process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting APP!\n');
                process.exit();
                break;
            case '/version':
                console.log('Your NODE.js version: ' + process.version);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});