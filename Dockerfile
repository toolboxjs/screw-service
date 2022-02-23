From node:latest
WORKDIR /
ADD screw-service /
CMD ["node", "dist/main"]
