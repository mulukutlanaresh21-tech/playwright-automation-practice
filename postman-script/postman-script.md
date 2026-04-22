## Step by step:

1. Export collection and environment from Postman
2. Create a folder is VS code and opnen the folder
3. Install newman with command --> npm install -g newman
4. Install html reports for newman with this command --> npm install -g newman-reporter-htmlextra
5. To run collection --> newman run collection.json -e env.json -r htmlextra
