# base image, this will provide a node js environment for out application to run
FROM node:18

# on to OS of above base image, we saying /app should be our working directory
# its like cd /app
WORKDIR /app

# copy package.json file from local machine in /app directory
COPY package.json .

# run npm install to install libraries from package.json
RUN npm install

# copy entire things from local machine to /app directory
COPY . .

# expose 3000 port of container, to map the port of our application
EXPOSE 3000

# command to run on container
CMD [ "node", "app.js" ]


# docker build -t cbagade/kube-setup:v1 .
# docker push cbagade/kube-setup:v1

# pods


# kubectl run app --image=cbagade/kube-setup:v1   -> deploys docker container by creating a pod
# kubectl get pods -> lists the pod
# kubectl describe pod <pod_name>
# kubectl delete pod <pod_name>



# Deployment
# the images should be pushed in repository
# kubectl create deployment kube-setup --image=cbagade/kube-setup:v1
# kubectl get deployment
# kubectl get pods
# kubectl describe pod <pod_name>
# Get Pod IP
# kubectl get pod -o wide
# Delete depllyment
# kubectl delete deployment <deployment_name>
# kubectl create deployment kube-setup --image=cbagade/kube-setup:v1
# Get Pod IP
# kubectl get pod -o wide
# It will change




# Calling this app
# try curl http://localhost:3000 -> fails
# try to get IP Address of pod
# kubectl get pod -o wide
# try curl http://10.244.0.17:3000 -> no response or fails
# enter inside container
# kubectl exec -it <pod> -- /bin/bash
# curl http://10.244.0.17:3000 -> success
# The pod ip is reachable inside cluster only


# Service
# ClusterIP
# For pods to communicate with other pods within cluster
# With ClusterIP service , pods can't be reached from outside
# kubectl expose --type=ClusterIP  deployment kube-setup --port 3000 --name kube-setup
# kubectl get svc
# Get IP - kubectl get pods -o wide
# curl http://<ip>:3000  ,  not accessible
# Enter inside pod 
# kubectl get pods
# kubectl exec -it <pod_name> -- /bin/bash
# curl http://<ip>:3000  ,  accessible (inside cluster)
# But again this will be reachable from within cluster, try entering pod and execute curl
# kubectl get svc
# kubectl delete svc <svc_name>

# NodePort
# kubectl expose --type=NodePort deployment kube-setup --port 3000 --name kube-setup  --overrides '{ "apiVersion": "v1","spec":{"ports": [{"port":80,"protocol":"TCP","targetPort":3000,"nodePort":30001}]}}'
# first --port 3000 will be override
# port:80 is port exposed by service
# targetPort:3000 will be application port
# nodeport is 30001
# curl http://localhost:30001


# Deployment ensuring pod
# kubectl get pods -w
# Now hit URL 
# curl http://localhost:30001/error
# observe pod going from error to running to error
# the pods to running will go due to Deployment, it will try to bring up the pod
# curl http://localhost:30001/
# this will ensure pod in running state



# Scaling (open 3 terminal windows)
# kubectl get pods -w --> 1 terminal
# curl http://localhost:30001 --> 2 terminal
# kubectl scale deployment/kube-setup --replicas=3 --> 3 terminal
# observe pod on 1 terminal increasing to 3
# curl http://localhost:30001/error --> 2 terminal and hit immediately
# curl http://localhost:30001 --> 2 terminal
# there won't be error because now request will go to other healthy pod

# Update deployment
# changed something in app.js and rebuild image
# docker build -t cbagade/kube-setup:v2 .
# docker push cbagade/kube-setup:v2
# we would need container name for updating image
# kubectl describe deployment kube-setup
########### OUTPUTS SHOWS#############
#  Labels:  app=kube-setup
#  Containers:
#   kube-setup:
#######################################
# so container name is kube-setup
# kubectl set image <deployment> <container_name>=<image>
# kubectl set image deployment/kube-setup kube-setup=cbagade/kube-setup:v2
# at this stage the image will be updated
# the status of rollout can be viewed with
# kubectl rollout status deployment/kube-setup
# First will bring new containers and then will terminate older ones
# kubectl get pods -w  --> on other terminal
# confirm the chages with 
# curl http://localhost:30001

# Rollback deployment
# kubectl rollout undo deployment/kube-setup
# kubectl rollout status deployment/kube-setup
# watch following on other terminal
# kubectl get pods -w --> on other terminal
# confirm the rollback with
# curl http://localhost:30001

# Deleting
# kubectl delete svc kube-setup
# kubectl delete deployment kube-setup


# Dashboard
# kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
# OR access URL in browser,  save the content in dashboard.yaml and kubectl apply -f dashboard.yaml
# kubectl get pod -n kubernetes-dashboard
# kubectl create serviceaccount -n kubernetes-dashboard admin-user
# kubectl create clusterrolebinding -n kubernetes-dashboard admin-user --clusterrole cluster-admin --serviceaccount=kubernetes-dashboard:admin-user
# token=$(kubectl -n kubernetes-dashboard create token admin-user)
# echo $token
# kubectl proxy
# Access following URL in browser
# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
# input the token
# create deployment and service again and observe in UI. Don't forget to change namespace
