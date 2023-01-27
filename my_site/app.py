from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route('/')
def home():
    return send_from_directory('static','index.html')

@app.route('/projects')
def about():
    return send_from_directory('static','projects.html')


if __name__ == '__main__':
    app.run()