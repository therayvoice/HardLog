# HardLog
A NodeJS library for logging to the console and keeping a hard record of whatever is logged to the console. Forget console.log(), forever!

# Installation
Use the following command to install HardLog via NPM:
```
npm i hardlog --save
```

# Usage
Follow this syntax while using hardlog:
```javascript
var hardlog = require('hardlog');

// hardlog.init() must be used before any other hardlog method
hardlog.init("Your Name", "Version Number", "LogFile.txt");

hardlog.write("Write anything to hardlog here!");
```

Console Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Your Name
	    Version: Version Number
	    HardLog file: LogFile.txt --2021-06-10T20:31:15.671Z
Write anything to hardlog here! --2021-06-10T20:31:15.672Z
```

./LogFile.txt Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Your Name
	    Version: Version Number
	    HardLog file: LogFile.txt --2021-06-10T20:31:15.671Z
Write anything to hardlog here! --2021-06-10T20:31:15.672Z
```


To write to both logs-file and console use:
```javascript
hardlog.write("Write anything to hardlog here!");
```

To write to only logs-file, there will be no console output:
```javascript
var hardlog = require('hardlog');

// hardlog.init() must be used before any other hardlog method
hardlog.init("Your Name", "Version Number", "LogFile.txt");

hardlog.shadow("Write anything to hardlog here, without Terminal dispay!");
```

Console Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Your Name
	    Version: Version Number
	    HardLog file: LogFile.txt --2021-06-10T20:35:11.909Z

```

LogFile.txt Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Your Name
	    Version: Version Number
	    HardLog file: LogFile.txt --2021-06-10T20:35:11.909Z
Write anything to hardlog here, without Terminal dispay! --2021-06-10T20:35:11.910Z
```

# Example
```javascript
var hardlog = require('hardlog');
hardlog.init("Ray Voice", "1.0.3", "LogFile.txt");

hardlog.write("First HardLog");
hardlog.shadow("Write anything to hardlog here, without Terminal dispay!");
```

Console Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Ray Voice
	    Version: 1.0.3
	    HardLog file: LogFile.txt --2021-06-10T20:38:22.921Z
First HardLog --2021-06-10T20:38:22.922Z
```

LogFile.txt Output:
```
Initialized HardLog v2.0.0 with the following details:
	    Author: Ray Voice
	    Version: 1.0.3
	    HardLog file: LogFile.txt --2021-06-10T20:38:22.921Z
First HardLog --2021-06-10T20:38:22.922Z
Write anything to hardlog here, without Terminal dispay! --2021-06-10T20:38:22.922Z
```

# Tips
1. Use the `chalk` library to color strings and then pass them to hardlog.
2. HardLogs are time-stamped.
3. Avoid using `console.log`, instead use `hardlog.shadow()`.
4. Don't pass more than a single argument to `hardlog.write()` or `hardlog.shadow()`.

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

