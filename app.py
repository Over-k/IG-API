from flask import Flask, render_template, request
from script import UsersData, available_users, find_image, clear_data, post_image, get_messages
HOST_NAME = "localhost"
HOST_PORT = 8080
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  return render_template('index.html')

@app.route('/username', methods=['GET', 'POST'])
def username():
  username = request.form['username']
  return UsersData(username)

@app.route('/images', methods=['GET', 'POST'])
def images():
  user = request.form['user']
  url = request.form['url']
  return find_image(url, user)

@app.route('/posts', methods=['GET', 'POST'])
def posts():
  url = request.form['url']
  return post_image(url)

@app.route('/available', methods=['GET', 'POST'])
def available():
  return available_users()

@app.route('/delete', methods=['GET', 'POST'])
def clear():
  return clear_data()

@app.route('/message', methods=['GET', 'POST'])
def loading():
  return get_messages()

if __name__ == "__main__":
  app.run(HOST_NAME, HOST_PORT)
