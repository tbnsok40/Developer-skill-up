### NGINX 서버 띄우기

mac 기준

- Brew 사용하여 Nginx 설치

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install nginx

nginx

nginx -s stop
```

- 설치된 nginx 디렉토리 이동

```
cd /usr/local/etc/nginx
```

- vim Editor로 nginx.conf 파일 수정

```
vi nginx.conf
```

- nginx.conf 수정 화면
  - 본인이 띄우고 싶은 html파일의 경로를 location/ 내부에 작성해준다.
  - 기존에 작성돼있던 root는 # 로 주석 처리 해준다(#root html)

```
server {
    listen       8080;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
    #root   html;
            root /Users/imseonghu/NGINX;
        #index  index.html index.htm;
    }
```
