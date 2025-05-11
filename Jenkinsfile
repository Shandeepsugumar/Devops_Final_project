pipeline {
    agent any

    environment {
        // Adjust to actual Minikube owner's paths
        KUBECONFIG = "/home/shandeep/.kube/config"
        MINIKUBE_HOME = "/home/shandeep/.minikube"
    }

    stages {
        stage('Setup Minikube Context') {
            steps {
                script {
                    sh '''
                    set -e  # Exit on error

                    echo "🔄 Switching to Minikube context..."
                    kubectl config use-context minikube
                    echo "✅ Minikube context set successfully!"
                    '''
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    sh '''
                    set -e  # Exit on error

                    echo "🚀 Deploying Application..."
                    kubectl apply -f deployment.yaml --validate=false
                    '''
                }
            }
        }
    }
}
