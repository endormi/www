local:
	make -j 2 local-server local-browser
.PHONY: local

local-server:
	hugo server -D
.PHONY: local-server

local-browser:
	open http://localhost:1313
.PHONY: local-browser