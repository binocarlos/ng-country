build:
	node build.js > countries.json

install:
	npm install country-slice
	npm install through

.PHONY: build install