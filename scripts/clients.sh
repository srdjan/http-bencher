sleep 0.5
autocannon -c500 -d5 -p5 http://0.0.0.0:$1 > ./results/$2.hello.md
autocannon -c500 -d5 -p5 http://0.0.0.0:$1/small > ./results/$2.small.md
# autocannon -c500 -d5 -p5 http://0.0.0.0:$1/big > ./results/$2.big.md
