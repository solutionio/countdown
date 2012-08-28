
build: components
	@component build

components:
	@Component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
