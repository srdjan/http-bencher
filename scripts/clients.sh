sleep 0.5
wrk -t12 -c400 -d3s http://0.0.0.0:$1 > ./results/$2.hello.md
# wrk -t12 -c400 -d3s http://0.0.0.0:$1/small > ./results/$2.small.md
# wrk -t12 -c400 -d3s http://0.0.0.0:$1/big > ./results/$2.big.md
