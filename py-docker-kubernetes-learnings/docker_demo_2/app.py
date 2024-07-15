# venv is a folder where all packages gets installed
# https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/
# rm -rf venv
# sudo apt install python3.12-venv
# python3.12 -m venv .venv
# python3 -m pip install --upgrade pip
# if you want to use .venv on ubuntu cli
# source .venv/bin/activate
# if you want to come out of .vnev on ubuntu cli
# deactivate
# if you want to use .venv on Visual Studio Code (VSC)
# (Once you created .venv on ubuntu or VCS), the VSC will show you a button to Select Interpreter
# Oe Ctrl + Shift + P and Select Interpreter in that box
# And select entry with .venv/bin/python
# When you do View - Terminal , it should show , something like
# Now all packages you install, with pip will reside in .venv
# (.venv) chandra@DESKTOP-NGKLJIG:~/py-docker-kubernetes-learnings/docker_demo$ 
# pip install -r requirements.txt

from flask import Flask
import json

app = Flask(__name__)

# read JSON file
# Opening JSON file
with open('./data/fruits_data.json') as json_file:
    fruits_json = json.load(json_file)

@app.get("/fruits")
def get_all_fruits():
    print("get_all_fruits() :: entered")
    return fruits_json, 200

@app.get("/fruits/<string:fruit_name>")
def get_a_fruit(fruit_name):
    for fruit in fruits_json:
        print(f"get_a_fruit() :: fruit is {fruit}")
        if fruit["fruitName"].lower() == fruit_name.lower():
            return fruit, 200
    return {"message":f"Fruits with name {fruit_name} is not found"}, 401

# to test this file, without docker
# pip install -r requirements.txt
# run following command
# flask run
# access on http://localhost:5000/fruits
# access on http://localhost:5000/fruits/orange