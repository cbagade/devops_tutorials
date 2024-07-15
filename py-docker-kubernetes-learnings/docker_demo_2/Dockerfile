# base image, this will provide a python environment for out application to run
# slim version of python image
FROM python:3.12-slim

# expose 5000 port of container, to map the port of our application
EXPOSE 5000

# on to OS of above base image, we saying /app should be our working directory
# its like cd /app
WORKDIR /app

# copy requirements.txt file from local machine in /app directory
COPY requirements.txt .

# run pip install -r requirements.txt to install libraries
RUN pip install -r requirements.txt

# copy everything to /app directory inside container
COPY . .

# command to run on container
# server accepts request from all hosts
CMD ["flask", "run", "--host", "0.0.0.0"]


# docker build -t cbagade/py-first-prog:v3 .
# docker push cbagade/py-first-prog:v3
# map port of host to that of container (host port is mapped to container, container port is mapped to application)
# docker run -d -p 5000:5000 --name py-demo cbagade/py-first-prog:v3
# docker ps -a
# docker logs <container_id> -f
# http://localhost:5000/fruits (access application on host port which is mapped to container)
# http://localhost:5000/fruits/orange (access application on host port which is mapped to container)
# docker stop py-demo
# docker rm py-demo
