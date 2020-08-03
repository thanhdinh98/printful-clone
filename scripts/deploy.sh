printful=$(docker ps -aq --filter "name=printful")

isAppRunning=$(docker ps -aq --filter "name=printful" --filter status=running)

if [ "$isAppRunning" != "" ]; then
    docker stop $printful
    docker rm $printful
fi

docker login -u $1 -p $2 registry.gitlab.com
docker run --name printful -d --restart on-failure --network brandly-demo registry.gitlab.com/dnthanh1298/printful
docker image prune -f