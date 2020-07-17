sleep 0.5
wrk -t12 -c400 -d5s http://0.0.0.0:$1 > ./results/$2.md
