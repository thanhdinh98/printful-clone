printful=$(sudo docker ps -aq --filter "name=printful")

isAppRunning=$(sudo docker ps -aq --filter "name=printful" --filter status=running)

if [ "$isAppRunning" != "" ]; then
  sudo docker stop $printful
  sudo docker rm $printful
fi

docker login -u $1 -p $2 registry.gitlab.com
sudo docker run --name printful -d --restart on-failure --network brandly-demo registry.gitlab.com/dnthanh1298/printful
sudo docker image prune -f