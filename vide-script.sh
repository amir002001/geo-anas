ffmpeg -i tmp.mp4 -vf "scale=-1:1080,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" -c:a copy tmp2.mp4

ffmpeg -i tmp2.mp4 \
  -c:v libx264 -preset slow -crf 23 \
  -movflags +faststart \
  -c:a aac -b:a 128k \
 out.mp4

rm tmp*

