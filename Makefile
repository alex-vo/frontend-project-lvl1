install:
	@ npm i

brain-calc:
	@ node bin/run-brain-calc.js

brain-even:
	@ node bin/run-brain-even.js

brain-games:
	@ node bin/run-brain-games.js

brain-gcd:
	@ node bin/run-brain-gcd.js	

brain-prime:
	@ node bin/run-brain-prime.js	

brain-progression:
	@ node bin/run-brain-progression.js	

publish:
	@ npm publish --dry-run

lint:
	@ npx eslint .
