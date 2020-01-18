d=$(date +%Y%m%d%H%M%S)
echo $d
zip -r build.zip build
scp build.zip mike@j123.ru:"/home/mike/nginxapps/fl"
ssh mike@j123.ru "cd /home/mike/nginxapps/fl && unzip build.zip && mv html old_html$d && mv build html && rm build.zip"
rm build.zip
