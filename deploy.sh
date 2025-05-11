#!/bin/bash

# Exit on error
set -e

# Set the correct kubeconfig if needed (Adjust path as necessary)
export KUBECONFIG=$HOME/.kube/config  # Update path if required

# Ensure Minikube context is selected
echo "🔄 Switching to Minikube context..."
kubectl config use-context minikube

# ---- FRONTEND ----
echo "⚙️ Building the FRONTEND Docker image..."
docker build -t shandeep04/docker_final_frontend -f Dockerfile.frontend .

# ---- BACKEND ----
echo "⚙️ Building the BACKEND Docker image..."
docker build -t shandeep04/docker_final_backend -f Dockerfile.backend .

# Docker login securely
echo "🔑 Logging in to Docker Hub..."
echo "shandeep-4621" | docker login -u "shandeep04" --password-stdin

# Push both images
echo "🚀 Pushing Docker images to Docker Hub..."
docker push shandeep04/docker_final_frontend
docker push shandeep04/docker_final_backend

# ---- DEPLOY FRONTEND ----
echo "📦 Deploying FRONTEND to Minikube..."

kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
        - name: frontend
          image: shandeep04/docker_final_frontend
          ports:
            - containerPort: 80
EOF

# ---- DEPLOY BACKEND ----
echo "📦 Deploying BACKEND to Minikube..."

kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
        - name: backend
          image: shandeep04/docker_final_backend
          ports:
            - containerPort: 80
EOF

echo "✅ Both frontend and backend deployments completed successfully!"
