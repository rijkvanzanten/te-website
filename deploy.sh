npm run build;
cd dist;
git init;
git add -A;
git commit -m "Deploy";
git push git@github.com:rijkvanzanten/te-website master:gh-pages --force;
