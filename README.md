# EasyChefFrontend


The Easy Chef project aims to create an application that can help users to easily find recipes that they can make based on their available ingredients. Easy Chef addresses the problem that many food enthusiasts and home cooks face of not knowing what meals they can make with a random assortment of leftover ingredients. 

In order to modify and run EasyChef, there are two options. 

## Frontend Modification
The EasyChef backend is hosted online on heroku, so users can modify the frontend without needing to install the backend.
### Required Tools:
`npm`

To install the frontend, first download the [EasyChef2022/easychef-frontend ](https://github.com/EasyChef2022/easychef-frontend) repository from Github.
Once this is completed, run the following code inside of the easychef-frontend directory:

`npm run dev`

This will compile and host the code on the localhost server, at http://localhost:3000/. If this link does not work, check the logs to see which localhost port is being used.

## Frontend and Backend Modification
To install both the Frontend and Backend, first install the Frontend by following the instructions for Frontend Modification.
Once this is completed, you can install the backend from the [EasyChef2022/back-end](https://github.com/EasyChef2022/back-end) repository from Github.

### Required Tools:
`python`
`postgresql`

First, modify the database settings in back-end/EasyChef/settings. You will see a block of code similar to the following:
`DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'easychef',
        'USER': 'mcirimele',
        'PASSWORD': '*****',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
`

Modify the USER and PASSWORD fields to your local psql values.

Once this is done, run the following commands:
`python3 manage.py makemigrations`
`python3 manage.py migrate`
`python3 manage.py runserver`

Once the final line is run, the server will be active at 127.0.0.1:8000.


How to modify:

Add new components in the /components folder, add new pages in the /pages folder. All other folders are NextJS boilerplate.
