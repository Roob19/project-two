add . &
echo "Done."
wait

git commit -m "minor tweek" &
echo "Done."
wait
git push -u origin main &
echo "Done."
wait
git push heroku main
echo '<><><><><>'
