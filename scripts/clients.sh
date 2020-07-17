sleep 1
wrk -t12 -c400 -d2s http://0.0.0.0:8010 > ./results/$1
