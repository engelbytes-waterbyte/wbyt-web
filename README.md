# Why?

In order to give waterbyte a better presentation on the internet (_mehr Präsentation_).

## How do I add myself to the team page?

Please go into the `src/pages` folder and consider elaborating the readme file there.

## Deployment

```bash
# build image from Dockerfile
docker build . -t waterbytestudio/wbyt-web:versionnumber --platform linux/amd64
#publish
docker push waterbytestudio/wbyt-web:v1.4
#pull
docker pull waterbytestudio/wbyt-web:v1.4
# use it
docker run --name loifilus -p 3000:3000 waterbytestudio/wbyt-web:v1.2
```
