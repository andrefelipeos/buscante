# Buscante

Another project from Alura's Angular training.  

## What is this project and what does it do?

Buscante is a front-end Angular application. It allows users to search books on the Google Books API. Users cannot add or edit books information with it.  

## How was it made and what technologies does it use?

Buscante was made as part of a course on Alura. It was built with **Angular** and uses data from the **Google Books API**.  

The following technologies were extensively used in the development of this project:  

- **Angular**
- **TypeScript**
- **RxJS**
- **Node.js**
- **Docker**
- **Nginx**
- **Google Books API**

Data is retrieved from the API using *observables*, then transformed using **RxJS** *operators* into proper **TypeScript** *models* to be used on **Angular** *components*.  

This project has a *Dockerfile* for easy deployment with **Docker**. It defines a *multi-stage build*: first a **Node.js** image is used to build the project for production; and then a small **Nginx** image is used for deployment.  

Finally, it is important to note that visual assets, such as some images and logos, and most CSS code was provided by Alura.  

## How to use it with Docker?

1. You can build the *Docker image* (a) or just pull it from *Docker Hub* (b).  

a. To build the image yourself, run the following command in the application's root directory.  

```
docker build --tag buscante:ng-16 .
```

b. To pull the image from Docker Hub, use the following command.  

```
docker pull andrefelipe/buscante:ng-16
```

In either case, you should now have the *buscante:ng-16* (or *andrefelipe/buscante:ng-16*) image locally.  

2. To run the application, just execute the following command.  

```
docker run --detach --publish 8080:80 buscante:ng-16
```

The `--detach` or `-d` option is used to run the container in background, only printing its ID as output.  

The `--publish` or `-p` option is used to publish containers ports to the host. It links a host's port to a container's port and it is used as `--publish <host-port>:<container-port>`. This way, the container's internal *Nginx* serves the application on the container's port `80`, but the `--publish` option used above publishes the application (i.e. makes it available) on the host's port `8080`.  

3. You can now see the application running on `http://localhost:8080` on you browser.  

