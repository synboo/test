# Installing node.js, npm and socket.io to CentOS

0. pre install needed module

install followings packages if they have not been insalled yet
```
# yum install openssl-devel
# yum install python
# yum install gcc-c++
```

1. install node.js & npm

```
$ wget http://nodejs.org/dist/v0.6.19/node-v0.6.19.tar.gz // latest url
$ tar xzvf node-v0.6.19.tar.gz // download file
$ cd node-v0.6.19
$ ./configure
$ make
$ sudo make install
```

2. install socket.io

error occured
```
[ws v0.4.19] Attempting to compile blazing fast native extensions.
[ws v0.4.19] Native code compile failed (but the module will still work):
[ws v0.4.19] The native extensions are faster, but not required.
[ws v0.4.19] On Windows, native extensions require Visual Studio and Python.
[ws v0.4.19] On Unix, native extensions require Python, make and a C++ compiler.
[ws v0.4.19] Start npm with --ws:verbose to show compilation output (if any).
```
http://stackoverflow.com/questions/11089082/installing-socket-io-with-node-js-v0-6-18-ws-failes-during-install

success when installing to sekico.co server
```
[ws v0.4.19] Attempting to compile blazing fast native extensions.
[ws v0.4.19] Native extension compilation successful!
```
