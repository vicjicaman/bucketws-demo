
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#bucketws-demo">BucketWS demo</a></li>
    <li><a href="#video">Video</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup">Setup</a></li>
        <li><a href="#start">Start</a></li>
      </ul>
    </li>
    <li><a href="#optimized-images">Optimized images</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- BUCKETWS -->
# BucketWS demo

This is a demo nodejs server that uses the BucketWS service for the next functionalities:
- Upload files signed from the server to a public bucket
- Upload files signed from the server to a private bucket
- Authorize the viewer to see the private bucket files
- List the files from the public bucket
- List the files from the private bucket
- Upload a file anonymously


<!-- VIDEO -->
## Video

Check this 2min video that shows the process of create the buckets on the UI and go through the demo functionalities.
[view video](https://www.youtube.com/watch?v=1qfLT9DlxPk)

<!-- GETTING STARTED -->
## Getting Started

You can test the API on your localhost and start uploading file in 5 minutes.

### Prerequisites

- Create an account at https://bucket.listws.com/v2/auth
- Create a private bucket named **test-private**
- Create a public bucket named **test-public**
- Create an API secret on the API Keys section
- Get the localhost access key on the section Domain -> CORS


### Installation

* Clone this repository
  ``` 
  git clone https://github.com/vicjicaman/bucketws-demo.git
  ```
* Go to the cloned repository and install the packages
  ``` 
  yarn install
  ```
  
### Setup

* Create a file .env on the repository folder with the next content, replace the values with your bucket names and account domain and secrets.
```  
    DOMAIN=xxxxxx.pws-trial-uc1.xyz
    BUCKET_PUBLIC=test-public
    BUCKET_PRIVATE=test-private
    API_KEY=kkkkkkkk-kkkk-kkkk-kkkk-kkkkkkkkkkkk
    API_SECRET=ssssssss-ssss-ssss-ssss-sssssssssss
    LOCALHOST_ACCESS_KEY=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
```  

### Start

* Start the service, by default you will find the service running on http://localhost:3000
  ``` 
  yarn start
  ```


<!-- OPTIMIZED IMAGES -->
## Optimized images

If you upload a png, webp or jpg file the service generated a set of smaller resized images that you can use depending on the target viewport, this smaller size image is a **minimap**

You can include on your site the next script to automatically detect and change the right image based on the image or background width.
```
    <script src="https://xxxxxx.pws-trial-uc1.xyz/_PWSR_/lib/pkg/v2/pagews-image/index.js"></script>
```

Now use the minimap URL on the **data-src** attribute as in this example:

```
    <img 
    data-src="https://util-files.listws.com/_PWSR_/files/minimaps/buckets/photos/9aca4aa83e79507630361b8fad6a7561.jpg/xs.webp"
    /> 
```
You can resize your screen or check the image on any device, the image will be automatically changed to get the optimal image size.


<!-- ABOUT -->
## About

**BucketWS** is a service to let you create private or public file buckets that will be delivered over a CDN with SSL



<!-- CONTACT -->
## Contact

Victor Jimenez - [@vicjicama](https://twitter.com/vicjicama) - vic@repoflow.com
Website: [Bucket](https://bucket.listws.com)

<p align="right">(<a href="#top">back to top</a>)</p>
